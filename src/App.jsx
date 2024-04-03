import "./styles/App.css";

import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import { getAllNotes } from "./utils/local-data";
import Page404 from "./pages/Page404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [notes, setNotes] = useState(() => getAllNotes());

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

  if (initializing) {
    return null;
  }

  // PEMBATAS

  const actives = notes.filter((note) => note.archived === false);
  const archiveds = notes.filter((note) => note.archived === true);

  const onDeleteHandler = (noteId) => {
    const notDeletedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(notDeletedNotes);
  };

  const onArchiveHandler = (noteId) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, archived: true };
      }
      return note;
    });
    setNotes([...updatedNotes]);
  };

  const onUnarchiveHandler = (noteId) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, archived: false };
      }
      return note;
    });
    setNotes([...updatedNotes]);
  };

  if (authedUser == null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // PEMBATAS
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ActiveNotes
              notes={actives}
              name={authedUser.name}
              logout={onLogout}
            />
          }
        />
        <Route path="/archive" element={<ArchivedNotes notes={archiveds} />} />
        <Route path="/notes/new" element={<AddPage setNotes={setNotes} />} />
        <Route
          path="/notes/:id"
          element={
            <DetailPage
              notes={notes}
              onDelete={onDeleteHandler}
              onArchive={onArchiveHandler}
              onUnarchive={onUnarchiveHandler}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
