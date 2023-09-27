import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

function Header() {
  // Context
  const context = useContext(AuthContext);
  console.log(context);
  // Navigate
  const navigate = useNavigate();

  const handleLogout = (e) => {
    context.setUser(false);
    navigate("/login");
    localStorage.removeItem("accessToken");
  };

  return (
    <header className="flex justify-between p-4 items-center bg-blue-950">
      <div
        id="container"
        className="w-5/6 flex items-center justify-between mx-auto"
      >
        <h1 className="font-bold text-2xl text-white">Todo List App</h1>
        <ul className="flex gap-5">
          {context.user ? (
            <li className="cursor-pointer text-white">
              <Link to="/">Home</Link>
            </li>
          ) : null}
          {context.user ? null : (
            <>
              <li className="cursor-pointer text-white">
                <Link to="/login">Login</Link>
              </li>
              <li className="cursor-pointer text-white">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {context.user ? (
            <li className="cursor-pointer text-white" onClick={handleLogout}>
              Logout
            </li>
          ) : null}
        </ul>
      </div>
    </header>
  );
}

export default Header;
