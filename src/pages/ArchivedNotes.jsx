import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const ArchivedNotes = ({ notes }) => {
  return (
    <Container>
      <div className="p-6">
        <h1 className="text-2xl mt-4 font-bold">Archived Notes</h1>

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
          <p className="mt-4">No archived notes</p>
        )}
      </div>
    </Container>
  );
};

export default ArchivedNotes;
