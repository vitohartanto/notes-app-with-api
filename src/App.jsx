import "./styles/App.css";

import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import { getAllNotes } from "./utils/local-data";
import Page404 from "./pages/Page404";

function App() {
  const [notes, setNotes] = useState(getAllNotes());
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ActiveNotes notes={actives} />} />
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
