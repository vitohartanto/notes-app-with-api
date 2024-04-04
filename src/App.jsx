import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { useState, useEffect, useMemo } from "react";

import Page404 from "./pages/Page404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import ThemeContext from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContext";
import AuthedUserContext from "./contexts/AuthedUserContext";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "id" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  const languageContextValue = useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (initializing) {
    return null;
  }

  if (authedUser == null) {
    return (
      <AuthedUserContext.Provider value={authedUser}>
        <ThemeContext.Provider value={themeContextValue}>
          <LanguageContext.Provider value={languageContextValue}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </BrowserRouter>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </AuthedUserContext.Provider>
    );
  }

  return (
    <AuthedUserContext.Provider value={authedUser}>
      <ThemeContext.Provider value={themeContextValue}>
        <LanguageContext.Provider value={languageContextValue}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ActiveNotes name={authedUser.name} logout={onLogout} />
                }
              />
              <Route
                path="/archive"
                element={
                  <ArchivedNotes name={authedUser.name} logout={onLogout} />
                }
              />
              <Route
                path="/notes/new"
                element={<AddPage name={authedUser.name} logout={onLogout} />}
              />
              <Route
                path="/notes/:id"
                element={
                  <DetailPage name={authedUser.name} logout={onLogout} />
                }
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </AuthedUserContext.Provider>
  );
}

export default App;
