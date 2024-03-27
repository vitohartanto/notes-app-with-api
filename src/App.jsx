import "./styles/App.css";
import Navbar from "./components/Navbar";
import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <AddPage /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<ActiveNotes />} />
        <Route path="/archive" element={<ArchivedNotes />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
