import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-white text-xl">
        {" "}
        <Link to="/" className="text-white">
          LOGO
        </Link>
      </h1>
      <div>
        <Link to="/signin" className="text-white mr-4">
          Sign In
        </Link>
        <Link to="/signup" className="text-white">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
