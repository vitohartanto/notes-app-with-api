import { MdFileDownloadDone } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router";
import Container from "../components/Container";

const AddPage = ({ setNotes }) => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Inputs before creating new note:", inputs);

    const newNote = {
      id: `notes-${+new Date()}`,
      ...inputs,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    console.log("New note:", newNote);

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    navigate("/");

    // Reset input fields after adding a note
    setInputs({ title: "", body: "" });
  };

  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <div className="p-6 flex flex-col items-center">
          <input
            name="title"
            type="text"
            placeholder="Your note's title here"
            className="w-64 rounded-lg p-4 bg-[#eeeeee] text-black"
            onChange={onChangeHandler}
            value={inputs.title}
          />
          <input
            className="w-64 h-96 mt-4 bg-[#eeeeee] text-black p-4 rounded-lg"
            placeholder="Fill your notes body here..."
            name="body"
            type="text"
            onChange={onChangeHandler}
            value={inputs.body}
          />
        </div>
        <button type="submit" className="fixed bottom-4 right-4">
          <MdFileDownloadDone className="text-5xl" />
        </button>
      </form>
    </Container>
  );
};

export default AddPage;
