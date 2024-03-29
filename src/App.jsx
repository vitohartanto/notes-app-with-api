import "./styles/App.css";
import Navbar from "./components/Navbar";
import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import { getAllNotes } from "./utils/local-data";

function App() {
  const [notes, setNotes] = useState(getAllNotes());

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ActiveNotes notes={notes} />} />
        <Route path="/archive" element={<ArchivedNotes notes={notes} />} />
        <Route path="/notes/new" element={<AddPage setNotes={setNotes} />} />
        <Route path="/notes/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
