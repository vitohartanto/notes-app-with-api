import { Link } from "react-router-dom";
import { IoLogoIonitron } from "react-icons/io5";
import Container from "../components/Container";

const Page404 = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-screen mt-[-75px]">
        <IoLogoIonitron className="text-9xl" />
        <h1 className="text-5xl font-bold">404</h1>
        <h2>Page Not Found</h2>
        <h2>The page you are looking for does not exist.</h2>
        <Link to="/">Back to Home</Link>
      </div>
    </Container>
  );
};

export default Page404;
