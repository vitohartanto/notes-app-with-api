import { MdFileDownloadDone } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router";
import Container from "../components/Container";
import PropTypes from "prop-types";
import { addNote } from "../utils/network-data";
import useInput from "../hooks/useInput";

const AddPage = ({ setNotes }) => {
  const [inputTitle, onTitleChangeHandler] = useInput("");
  const [inputBody, setInputBody] = useState("");
  const navigate = useNavigate();

  const onBodyChangeHandler = (event) => {
    const { innerHTML } = event.target;
    setInputBody(innerHTML);
  };

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate("/");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddNoteHandler({ title: inputTitle, body: inputBody });
  };

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();

  //   console.log("Inputs before creating new note:", inputTitle, inputBody);

  //   const newNote = {
  //     id: `notes-${+new Date()}`,
  //     title: inputTitle,
  //     body: inputBody,
  //     archived: false,
  //     createdAt: new Date().toISOString(),
  //   };

  //   console.log("New note:", newNote);

  //   setNotes((prevNotes) => {
  //     return [...prevNotes, newNote];
  //   });

  //   navigate("/");

  //   // Reset input fields after adding a note
  //   setInputTitle("");
  //   setInputBody("");
  // };

  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <div className="px-8 py-6 md:px-14 lg:px-20 xl:px-32 flex flex-col items-center">
          <input
            name="title"
            type="text"
            placeholder="Please provide the title of your note."
            className="w-full mt-4 rounded-lg p-4 bg-transparent border-2"
            onChange={onTitleChangeHandler}
            value={inputTitle}
          />
          <div
            className="w-full h-96 mt-4 bg-transparent border-2 p-4 rounded-lg text-[#848d87]"
            data-text="Please enter your note's content here, with support for rich text formatting such as bold, italic, underline, and more."
            name="body"
            type="text"
            onInput={onBodyChangeHandler}
            value={inputBody}
            contentEditable
          />
        </div>
        <button type="submit" className="fixed bottom-4 right-4">
          <MdFileDownloadDone className="text-5xl" />
        </button>
      </form>
    </Container>
  );
};

// AddPage.propTypes = {
//   setNotes: PropTypes.func.isRequired,
// };

export default AddPage;
