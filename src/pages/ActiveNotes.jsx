import { showFormattedDate } from "../utils";
import AddPageButton from "../components/AddPageButton";
import { Link, useSearchParams } from "react-router-dom";
import { FaPeopleRobbery } from "react-icons/fa6";
import Container from "../components/Container";
import PropTypes from "prop-types";
import { useState } from "react";

const ActiveNotes = ({ notes }) => {
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
      <AddPageButton />
      <div className="p-6">
        <h1 className="text-2xl mt-4 font-bold">Active Notes</h1>

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
            <FaPeopleRobbery className="text-5xl mt-8" />
            <p className="mt-4">No active notes</p>
          </div>
        )}
      </div>
    </Container>
  );
};

ActiveNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default ActiveNotes;
