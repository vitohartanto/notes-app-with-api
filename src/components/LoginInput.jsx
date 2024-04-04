import useInput from "../hooks/useInput";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const LoginInput = ({ login }) => {
  const { language } = useContext(LanguageContext);
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };
  return (
    <form className="flex flex-col" onSubmit={onSubmitHandler}>
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

      <button className="border-2 note-card rounded-lg py-2">
        {language === "en" ? "Login" : "Masuk"}
      </button>
    </form>
  );
};

export default LoginInput;
