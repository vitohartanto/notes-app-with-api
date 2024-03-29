import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import Container from "../components/Container";
import ArchiveUnarchiveDeleteButtons from "../components/ArchiveUnarchiveDeleteButtons";
import PropTypes from "prop-types";

const DetailPage = ({ notes, onDelete, onArchive, onUnarchive }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  return (
    <Container>
      <div className="p-8  rounded-lg">
        <h1 className="mt-2 text-3xl font-bold">{note.title}</h1>
        <h2 className="mb-6">{showFormattedDate(note.createdAt)}</h2>
        <p className="text-lg">{note.body}</p>
      </div>
      <ArchiveUnarchiveDeleteButtons
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        note={note}
      />
    </Container>
  );
};

DetailPage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default DetailPage;
