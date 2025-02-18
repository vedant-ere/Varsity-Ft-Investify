import React from "react";
import logo from "../src/assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="font-inter font-medium max-w-screen-lg mx-auto px-4">
      <nav className="flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            {" "}
            <img src={logo} className="h-28" alt="Logo" />{" "}
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <ul className="flex gap-8 mr-4">
            {/* <Link to="/modules" className="hover:text-blue-500 dark:hover:text-blue-400">Modules</Link> */}
            {/* <Link className="hover:text-blue-500 dark:hover:text-blue-400">Videos</Link>
            <Link className="hover:text-blue-500 dark:hover:text-blue-400">Blog</Link>
            <Link className="hover:text-blue-500 dark:hover:text-blue-400">Certified</Link> */}
          </ul>
          <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder=" "
              />

              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
