import "./styles/App.css";
import Navbar from "./components/Navbar";
import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
} from "./utils/local-data";

function App() {
  const [notes, setNotes] = useState(getAllNotes());
  const actives = notes.filter((note) => note.archived === false);
  const archiveds = notes.filter((note) => note.archived === true);

  const actives = notes ? notes.getActiveNotes : null;
  const archiveds = notes ? notes.getArchivedNotes : null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ActiveNotes notes={actives} />} />
        <Route path="/archive" element={<ArchivedNotes notes={archiveds} />} />
        <Route path="/notes/new" element={<AddPage setNotes={setNotes} />} />
        <Route path="/notes/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
