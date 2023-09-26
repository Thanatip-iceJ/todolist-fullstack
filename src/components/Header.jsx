import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-4 items-center bg-white">
      <h1 className="font-bold text-2xl">Todo List App</h1>
      <ul className="flex gap-5">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/login">Login</Link>
        </li>
        <li className="cursor-pointer">Logout</li>
        <li className="cursor-pointer">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
