import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import Container from "../components/Container";
import ArchiveUnarchiveDeleteButtons from "../components/ArchiveUnarchiveDeleteButtons";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

const DetailPage = () => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleNote = async () => {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
        setLoading(false);
      }
    };
    const timer = setTimeout(() => {
      fetchSingleNote();
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const onDeleteHandler = async (id) => {
    const { error } = await deleteNote(id);

    if (!error) {
      navigate("/");
    } else {
      console.log("Error while deleting note");
    }
  };

  const onArchiveTogglerHandler = async (id) => {
    if (!note.archived) {
      const { error } = await archiveNote(id);

      if (!error) {
        navigate("/");
      }
      console.log("Error while archieving note!");
    } else {
      const { error } = await unarchiveNote(id);

      if (!error) {
        navigate("/");
      }
      console.log("Error while unarchieving note!");
    }
  };

  return (
    <Container>
      {loading && <LoadingPage />}
      {!loading && (
        <div>
          <div className="px-8 py-10 md:px-10 md:py-16 lg:px-20 xl:px-32 xl:py-24 rounded-lg">
            <h1 className="mt-2 text-5xl font-bold">{note.title}</h1>
            <h2 className="mb-6 xl:text-lg">
              {showFormattedDate(note.createdAt)}
            </h2>
            <p className="text-lg xl:text-xl">{parser(note.body)}</p>
          </div>
          <ArchiveUnarchiveDeleteButtons
            id={id}
            onDelete={onDeleteHandler}
            archiveToggler={onArchiveTogglerHandler}
            note={note}
          />
        </div>
      )}
    </Container>
  );
};

// DetailPage.propTypes = {
//   notes: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired,
//       archived: PropTypes.bool.isRequired,
//       createdAt: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onArchive: PropTypes.func.isRequired,
//   onUnarchive: PropTypes.func.isRequired,
// };

export default DetailPage;
