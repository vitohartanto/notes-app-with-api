import useInput from "../hooks/useInput";

const RegisterInput = ({ register }) => {
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    register({
      name,
      email,
      password,
    });
  };
  return (
    <form className="flex flex-col" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="rounded-lg px-4 py-2 text-black mb-4"
        placeholder="Username"
        value={name}
        onChange={onNameChangeHandler}
      />
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
      {/* <input
        type="password"
        className="rounded-lg px-4 py-2 text-black mb-4"
        placeholder="Confirm Password"
      /> */}
      <button className="border-2 rounded-lg py-2">Register</button>
    </form>
  );
};

export default RegisterInput;
