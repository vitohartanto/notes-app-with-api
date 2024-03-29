import { IoArchive } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdUnarchive } from "react-icons/md";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const ArchiveUnarchiveDeleteButtons = ({
  id,
  onDelete,
  onArchive,
  onUnarchive,
  note,
}) => {
  const navigate = useNavigate();

  const onDetailDeleteHandler = () => {
    onDelete(id);
    navigate("/");
  };

  const onDetailArchiveHandler = () => {
    onArchive(id);
    navigate("/");
  };

  const onDetailUnarchiveHandler = () => {
    onUnarchive(id);
    navigate("/");
  };
  return (
    <div className="flex items-center fixed bottom-4 right-4">
      <button
        className="m-2"
        onClick={
          note.archived ? onDetailUnarchiveHandler : onDetailArchiveHandler
        }
      >
        {note.archived ? (
          <MdUnarchive className="text-4xl" />
        ) : (
          <IoArchive className="text-4xl" />
        )}
      </button>
      <button className="m-2" onClick={onDetailDeleteHandler}>
        <MdDelete className="text-5xl" />
      </button>
    </div>
  );
};

ArchiveUnarchiveDeleteButtons.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArchiveUnarchiveDeleteButtons;
