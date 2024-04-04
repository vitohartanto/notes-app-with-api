import Container from "../components/Container";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import PropTypes from "prop-types";

const LoginPage = ({ loginSuccess }) => {
  const { language } = useContext(LanguageContext);
  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center mt-[-40px]">
        <div className="border-2 note-card shadow-[1px_-1px_4px_8px_rgba(255,255,255,0.78)] sm:w-96 xl:w-[420px] sm:mx-auto mx-8 rounded-lg p-6 ">
          <h1 className="text-2xl font-bold mb-4">
            {language === "en" ? "Login" : "Masuk"}
          </h1>
          <h2 className="text-base mb-6">
            {language === "en"
              ? "Capture Your Thoughts, Anywhere, Anytime with Personal Notes"
              : "Abadikan Pikiran Anda, Di Mana Saja, Kapan Saja dengan Catatan Pribadi"}
          </h2>
          <LoginInput login={onLoginHandler} />
          <h2 className="mt-4 text-center">
            {language === "en" ? (
              <>
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline">
                  Register here
                </Link>
              </>
            ) : (
              <>
                Tidak punya akun?{" "}
                <Link to="/register" className="underline">
                  Daftar disini
                </Link>
              </>
            )}
          </h2>
        </div>
      </div>
    </Container>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
};

export default LoginPage;
