import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth/FirebaseProvider";

const Nav = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged Out Successfully");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/allTourist"
          className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
        >
          All Tourist Spots
        </Link>
      </li>
      <li>
        <Link
          to="/addTourist"
          className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
        >
          Add Tourist Spots
        </Link>
      </li>
      <li>
        <Link
          to="/myList"
          className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
        >
          My List
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar font-rancho fixed left-0 top-0 backdrop-blur-lg z-50 w-full text-white text-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#161618]"
          >
            {links}
            {!user && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Cho Lo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-[#161618] hover:underline transition duration-300 ease-in-out"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        {user ? (
          <div className="flex items-center">
            <div className="relative group">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full"
              />
              <div className="absolute bottom-0 left-0 hidden mb-2 w-max group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
                {user.displayName}
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="ml-4 bg-transparent border border-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-transparent border border-white  text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-transparent border border-white  text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
