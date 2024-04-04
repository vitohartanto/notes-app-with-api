import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const RegisterPage = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  };
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center mt-[-40px]">
        <div className="note-card border-2 shadow-[1px_-1px_4px_8px_rgba(255,255,255,0.78)] sm:w-96 xl:w-[420px] sm:mx-auto mx-8 rounded-lg p-6 ">
          <h1 className="text-2xl font-bold mb-4">
            {language === "en" ? "Register" : "Daftar"}
          </h1>
          <h2 className="text-base mb-6">
            {language === "en"
              ? "Capture Your Thoughts, Anywhere, Anytime with Personal Notes"
              : "Abadikan Pikiran Anda, Di Mana Saja, Kapan Saja dengan Catatan Pribadi"}
          </h2>
          <RegisterInput register={onRegisterHandler} />
          <h2 className="mt-4 text-center">
            {language === "en" ? (
              <>
                Already registered? Back to{" "}
                <Link to="/" className="underline">
                  Login
                </Link>
              </>
            ) : (
              <>
                Sudah daftar? Kembali ke{" "}
                <Link to="/" className="underline">
                  Masuk
                </Link>
              </>
            )}
          </h2>
          <h2 className="mt-4 text-center"></h2>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
