import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your Email"
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            required
            placeholder="Enter your Password"
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl mt-3 rounded-full placeholder:text-gray-400"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className=" mt-5 outline-none border-none  bg-emerald-600 py-2 px-8 w-full text-xl rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
