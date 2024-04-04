import { GiDiceFire } from "react-icons/gi";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const LoadingPage = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center mt-[-70px]">
      <GiDiceFire className="text-9xl mb-4" />
      <p className="text-2xl">
        {language === "en" ? "Loading..." : "Memuat..."}
      </p>
      <p className="mt-4 ">
        {language === "en" ? "Please wait" : "Silakan tunggu"}
      </p>
    </div>
  );
};

export default LoadingPage;
