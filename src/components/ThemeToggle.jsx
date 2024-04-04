import { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import ThemeContext from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <BsFillMoonStarsFill className="text-4xl" />
      ) : (
        <FiSun className="text-4xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
