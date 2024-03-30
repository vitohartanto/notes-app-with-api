import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import Container from "../components/Container";
import ArchiveUnarchiveDeleteButtons from "../components/ArchiveUnarchiveDeleteButtons";
import PropTypes from "prop-types";
import parser from "html-react-parser";

const DetailPage = ({ notes, onDelete, onArchive, onUnarchive }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  return (
    <Container>
      <div className="px-8 py-10 md:px-10 md:py-16 lg:px-20 xl:px-32 xl:py-24 rounded-lg">
        <h1 className="mt-2 text-5xl font-bold">{note.title}</h1>
        <h2 className="mb-6 xl:text-lg">{showFormattedDate(note.createdAt)}</h2>
        <p className="text-lg xl:text-xl">{parser(note.body)}</p>
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
