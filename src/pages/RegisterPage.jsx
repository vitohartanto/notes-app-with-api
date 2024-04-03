import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";

const Register = () => {
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
        <div className="border-2 shadow-[1px_-1px_4px_8px_rgba(255,255,255,0.78)] mx-8 rounded-lg p-6 ">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <h2 className="text-base mb-6">
            Capture Your Thoughts, Anywhere, Anytime with Personal Notes
          </h2>
          <RegisterInput register={onRegisterHandler} />
          <h2 className="mt-4 text-center">
            Already registered? Back to{" "}
            <Link to="/" className="underline">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default Register;
