import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";

const ArchivedNotes = ({ notes }) => {
  const archiveds = notes ? getArchivedNotes(notes) : null;
  return (
    <div className="p-6">
      <h1 className="text-2xl mt-4 font-bold">Archived Notes</h1>

      {archiveds ? (
        archiveds.map((note) => {
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
  );
};

export default ArchivedNotes;
