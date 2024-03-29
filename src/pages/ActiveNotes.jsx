import { showFormattedDate } from "../utils";
import AddPageButton from "../components/AddPageButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getActiveNotes } from "../utils/local-data";
import Container from "../components/Container";

const ActiveNotes = ({ notes }) => {
  return (
    <Container>
      <AddPageButton />
      <div className="p-6">
        <h1 className="text-2xl mt-4 font-bold">Active Notes</h1>

        {notes && notes.length ? (
          notes.map((note) => {
            return (
              <div key={note.id} className="border-2 p-6 rounded-lg mt-4">
                <Link to={`/notes/${note.id}`} className="text-xl font-bold">
                  {note.title}
                </Link>
                <h2 className="text-sm">{showFormattedDate(note.createdAt)}</h2>
                <p className="text-base mt-4">{note.body}</p>
              </div>
            );
          })
        ) : (
          <p className="mt-4">No active notes</p>
        )}
      </div>
    </Container>
  );
};

export default ActiveNotes;
