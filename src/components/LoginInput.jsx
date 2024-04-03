import useInput from "../hooks/useInput";

const LoginInput = ({ login }) => {
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
        className="rounded-lg px-4 py-2 text-black mb-4"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        className="rounded-lg px-4 py-2 text-black mb-4"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChangeHandler}
      />

      <button className="border-2 rounded-lg py-2">Login</button>
    </form>
  );
};

export default LoginInput;
