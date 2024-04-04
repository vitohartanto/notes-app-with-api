import { IoArchive } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdUnarchive } from "react-icons/md";
// import PropTypes from "prop-types";

const ArchiveUnarchiveDeleteButtons = ({
  id,
  onDelete,
  archiveToggler,
  note,
}) => {
  return (
    <div className="flex items-center fixed bottom-4 right-4 lg:bottom-8 lg:right-8">
      <button className="m-2" onClick={() => archiveToggler(note.id)}>
        {note.archived ? (
          <MdUnarchive className="text-4xl sm:text-5xl" />
        ) : (
          <IoArchive className="text-4xl sm:text-5xl" />
        )}
      </button>
      <button className="m-2" onClick={() => onDelete(note.id)}>
        <MdDelete className="text-5xl sm:text-6xl" />
      </button>
    </div>
  );
};

// ArchiveUnarchiveDeleteButtons.propTypes = {
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onArchive: PropTypes.func.isRequired,
//   onUnarchive: PropTypes.func.isRequired,
//   note: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     archived: PropTypes.bool.isRequired,
//     createdAt: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ArchiveUnarchiveDeleteButtons;
