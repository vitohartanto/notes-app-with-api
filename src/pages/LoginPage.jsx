import Container from "../components/Container";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";

const LoginPage = ({ loginSuccess }) => {
  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center mt-[-40px]">
        <div className="border-2 shadow-[1px_-1px_4px_8px_rgba(255,255,255,0.78)] mx-8 rounded-lg p-6 ">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <h2 className="text-base mb-6">
            Capture Your Thoughts, Anywhere, Anytime with Personal Notes
          </h2>
          <LoginInput login={onLoginHandler} />
          <h2 className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Register here
            </Link>
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
