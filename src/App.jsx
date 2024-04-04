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

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

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
      <ThemeContext.Provider value={themeContextValue}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ActiveNotes name={authedUser.name} logout={onLogout} />}
          />
          <Route
            path="/archive"
            element={<ArchivedNotes name={authedUser.name} logout={onLogout} />}
          />
          <Route
            path="/notes/new"
            element={<AddPage name={authedUser.name} logout={onLogout} />}
          />
          <Route
            path="/notes/:id"
            element={<DetailPage name={authedUser.name} logout={onLogout} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
