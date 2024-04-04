import { GiDiceFire } from "react-icons/gi";

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center mt-[-70px]">
      <GiDiceFire className="text-9xl mb-4" />
      <p className="text-2xl">Loading...</p>
      <p className="mt-4 ">Please Wait</p>
    </div>
  );
};

export default LoadingPage;
