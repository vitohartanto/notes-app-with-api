import useInput from "../hooks/useInput";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const RegisterInput = ({ register }) => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      register({
        name,
        email,
        password,
      });

      navigate("/");
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <form className="flex flex-col" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="border-2 note-card rounded-lg px-4 py-2 text-black mb-4"
        placeholder={language === "en" ? "Username" : "Nama panggilan"}
        value={name}
        onChange={onNameChangeHandler}
      />
      <input
        type="email"
        className="border-2 note-card rounded-lg px-4 py-2 text-black mb-4"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        className="border-2 note-card rounded-lg px-4 py-2 text-black mb-4"
        placeholder={language === "en" ? "Password" : "Kata sandi"}
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <input
        type="password"
        className="border-2 note-card rounded-lg px-4 py-2 text-black mb-4"
        placeholder={
          language === "en" ? "Confirm Password" : "Konfirmasi kata sandi"
        }
        autoComplete="current-password"
        value={confirmPassword}
        onChange={onConfirmPasswordChangeHandler}
      />
      <button className="note-card border-2 rounded-lg py-2">
        {language === "en" ? "Register" : "Daftar"}
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func,
};

export default RegisterInput;
