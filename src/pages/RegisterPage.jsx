import { useState } from "react";
import axios from "axios";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).alphanum().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

function RegisterPage() {
  // useNavigate
  const navigate = useNavigate();
  // STATES
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // HANDLES
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value, error } = schema.validate(
      {
        username,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    );
    const nextError = {
      username: "",
      password: "",
      confirmPassword: "",
    };
    if (error) {
      for (let item of error.details) {
        nextError[item.path[0]] = item.message;
      }
      return setError({ ...nextError });
    }
    setError({
      username: "",
      password: "",
      confirmPassword: "",
    });

    axios
      .post("http://localhost:5555/auth/register", {
        username: username,
        password: password,
      })
      .then((res) => {
        window.alert("Successful Registration");
        navigate("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <form
      className="flex flex-col gap-4 bg-white p-6 rounded-md"
      onSubmit={handleSubmit}
    >
      <div id="username">
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          className={`rounded-sm outline-none px-3 py-1 focus:ring-2  border w-full ${
            !error.username
              ? "focus:ring-blue-500"
              : "focus:ring-red-600 border-red-600"
          }`}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.username ? (
          <span className="text-red-600 text-xs">{error.username}</span>
        ) : null}
      </div>
      <div id="password">
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className={`rounded-sm outline-none px-3 py-1 focus:ring-2  border w-full ${
            !error.password
              ? "focus:ring-blue-500"
              : "focus:ring-red-600 border-red-600"
          }`}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password ? (
          <span className="text-red-600 text-xs">{error.password}</span>
        ) : null}
      </div>
      <div id="confirm-password">
        <label htmlFor="confirm" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm"
          value={confirmPassword}
          className={`rounded-sm outline-none px-3 py-1 focus:ring-2  border w-full ${
            !error.confirmPassword
              ? "focus:ring-blue-500"
              : "focus:ring-red-600 border-red-600"
          }`}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error.confirmPassword ? (
          <span className="text-red-600 text-xs">{error.confirmPassword}</span>
        ) : null}
      </div>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-sm font-semibold mt-3">
        Sign Up
      </button>
    </form>
  );
}

export default RegisterPage;
