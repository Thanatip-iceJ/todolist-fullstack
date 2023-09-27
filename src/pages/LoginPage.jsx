import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function LoginPage() {
  // Context
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  // State
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/auth/login", input)
      .then((res) => {
        console.log(res.data.accessToken);
        localStorage.setItem("accessToken", res.data.accessToken);
        context.setUser(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Login Failed");
      });
  };

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  return (
    <form
      className="flex flex-col gap-4 bg-white p-6 rounded-md"
      onSubmit={handleLogin}
    >
      <div id="username">
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="rounded-sm outline-none px-3 py-1 focus:ring-2 focus:ring-blue-500 border w-full"
          value={input.username}
          onChange={handleChangeInput}
        />
      </div>
      <div id="password">
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="rounded-sm outline-none px-3 py-1 focus:ring-2 focus:ring-blue-500 border w-full"
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-sm font-semibold mt-3">
        Sign In
      </button>
    </form>
  );
}

export default LoginPage;
