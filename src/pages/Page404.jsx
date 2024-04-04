import { Link } from "react-router-dom";
import { IoLogoIonitron } from "react-icons/io5";
import Container from "../components/Container";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

const Page404 = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-screen mt-[-80px] p-8">
        <IoLogoIonitron className="text-9xl" />
        <h1 className="text-5xl font-bold mt-4">404</h1>
        <h2 className="mt-4 md:text-lg font-medium">
          {language === "en" ? "Page Not Found" : "Halaman Tidak Ditemukan"}
        </h2>
        <h2 className="text-center mt-4 md:text-lg">
          {language === "en"
            ? "The page you are looking for does not exist."
            : "Halaman yang Anda cari tidak nyata"}
        </h2>
        <Link to="/">
          <div className="mt-4 border-2 px-4 py-2 rounded-lg font-semibold">
            {language === "en" ? "Back to Home" : "Kembali ke Rumah"}
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Page404;
