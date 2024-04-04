import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useState, useEffect } from "react";
import { FaPeoplePulling } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import LoadingPage from "./LoadingPage";

const ArchivedNotes = ({ name, logout }) => {
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("title") || "");

  useEffect(() => {
    const fetchArchivedNotes = async () => {
      setLoading(true);
      const { data } = await getArchivedNotes();
      setArchivedNotes(data);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchArchivedNotes();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Container name={name} logout={logout}>
      {loading && <LoadingPage />}
      {!loading && (
        <div className="p-6 md:px-10 lg:px-20 xl:px-32">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl my-4 xl:my-5 font-bold">
            Archived Notes
          </h1>
          <SearchBar
            search={search}
            setSearch={setSearch}
            setSearchParams={setSearchParams}
          />

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredNotes && filteredNotes.length ? (
              filteredNotes.map((note) => {
                return (
                  <Link to={`/notes/${note.id}`} key={note.id}>
                    <div className="border-2 p-6 rounded-lg h-64 sm:h-[270px] lg:h-[300px]">
                      <h1 className="text-2xl lg:text-2xl font-bold">
                        {note.title}
                      </h1>
                      <h2 className="text-sm lg:text-base lg:mt-1">
                        {showFormattedDate(note.createdAt)}
                      </h2>
                      <p className="text-base lg:text-lg mt-4 break-words hyphens-auto line-clamp-5">
                        {parser(note.body)}
                      </p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="sm:relative sm:w-screen mx-[-24px] md:mx-[-40px] lg:mx-[-80px] xl:mx-[-128px] mt-20 sm:mt-40">
                <div className="flex flex-col items-center justify-center sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
                  <FaPeoplePulling className="text-6xl sm:text-7xl mt-8" />
                  <p className="mt-4 text-lg sm:text-xl">No archived notes</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

// ArchivedNotes.propTypes = {
//   notes: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired,
//       archived: PropTypes.bool.isRequired,
//       createdAt: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ArchivedNotes;
