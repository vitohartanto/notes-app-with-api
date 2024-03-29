import { MdNoteAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const AddPageButton = () => {
  return (
    <Link className="fixed bottom-4 right-4" to="/notes/new">
      <MdNoteAdd className="text-6xl p-2 rounded-full border-2 bg-[#222831] hover:text-[#222831] hover:border-[#222831] hover:bg-[#eeeeee]" />
    </Link>
  );
};

export default AddPageButton;
