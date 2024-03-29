import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

const DetailPage = () => {
  const { id } = useParams();
  const note = getNote(id);
  return (
    <div className="p-8  rounded-lg">
      <h1 className="mt-2 text-3xl font-bold">{note.title}</h1>
      <h2 className="mb-6">{showFormattedDate(note.createdAt)}</h2>
      <p className="text-lg">{note.body}</p>
    </div>
  );
};

export default DetailPage;
