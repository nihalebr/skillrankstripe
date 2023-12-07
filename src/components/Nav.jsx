import { useCookies } from "react-cookie";
import { LoginContext } from "../context/LoginContext";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Nav = () => {
  const [loginState, setLoginState] = useContext(LoginContext);
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!loginState.isLoggedIn) {
      navigate("/login");
      return;
    }
    removeCookie("jwt", { sameSite: "none", secure: true });
    removeCookie("subitem", { sameSite: "none", secure: true });
    removeCookie("user", { sameSite: "none", secure: true });
    setLoginState({
      ...loginState,
      isLoggedIn: false,
    });
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };
  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 left-0  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-black">
              Skill<span className="text-blue-700">r</span>ank
            </span>
          </Link>
          <div className="flex md:order-2">
            <Button color="blue" type="button" onClick={handleLogin}>
              {loginState.isLoggedIn ? "Logout" : "Login"}
            </Button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          ></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
