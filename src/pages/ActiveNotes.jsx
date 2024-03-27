import { useState } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import AddPageButton from "../components/AddPageButton";
import { Link } from "react-router-dom";

const ActiveNotes = () => {
  const [notes, setNotes] = useState(getAllNotes());

  return (
    <div>
      <AddPageButton />
      <div className="p-6">
        <h1 className="text-2xl mt-4 font-bold">Active Notes</h1>

        {notes.map((note) => {
          return (
            <div key={note.id} className="border-2 p-6 rounded-lg mt-4">
              <Link to={`/notes/${id}`} className="text-xl font-bold">
                {note.title}
              </Link>
              <h2 className="text-sm">{showFormattedDate(note.createdAt)}</h2>
              <p className="text-base mt-4">{note.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveNotes;
