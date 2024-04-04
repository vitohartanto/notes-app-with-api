import { useContext } from "react";

import LanguageContext from "../contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? (
        <h1 className="text-2xl">id</h1>
      ) : (
        <h1 className="text-2xl">en</h1>
      )}
    </button>
  );
};

export default LanguageToggle;
