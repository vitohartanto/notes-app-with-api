import { MdFileDownloadDone } from "react-icons/md";

const AddPage = () => {
  return (
    <div>
      <div className="p-6 flex flex-col items-center">
        <input
          type="text"
          placeholder="Your note's title here"
          className="w-64 rounded-lg p-4 bg-[#eeeeee]"
        />
        <div
          className="w-64 h-96 mt-4 bg-[#eeeeee] text-black p-4 rounded-lg"
          contentEditable
          data-placeholder="Fill your notes body here..."
        />
      </div>
      <button className="fixed bottom-4 right-4">
        <MdFileDownloadDone className="text-5xl" />
      </button>
    </div>
  );
};

export default AddPage;
