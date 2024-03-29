import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useState } from "react";
import { FaPeoplePulling } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const ArchivedNotes = ({ notes }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("title") || "");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Container
      search={search}
      setSearch={setSearch}
      setSearchParams={setSearchParams}
    >
      <div className="p-6">
        <h1 className="text-2xl mt-4 font-bold">Archived Notes</h1>

        {filteredNotes && filteredNotes.length ? (
          filteredNotes.map((note) => {
            return (
              <div key={note.id} className="border-2 p-6 rounded-lg mt-4">
                <Link to={`/notes/${note.id}`} className="text-2xl font-bold">
                  {note.title}
                </Link>
                <h2 className="text-sm">{showFormattedDate(note.createdAt)}</h2>
                <p className="text-base mt-4">{note.body}</p>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center">
            <FaPeoplePulling className="text-5xl mt-8" />
            <p className="mt-4">No archived notes</p>
          </div>
        )}
      </div>
    </Container>
  );
};

ArchivedNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArchivedNotes;
