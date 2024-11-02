import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar  w-full backdrop-blur-lg bg-white/30 sticky top-0">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to={"/"}>
              <a className="text-xl">Home</a>
            </Link>
            <Link to={"/coffe"}>
              <a className="text-xl">Coffe</a>
            </Link>
            <Link to={"/deshboard"}>
              <a className="text-xl">DeshBoard</a>
            </Link>
          </ul>
        </div>
        <Link to={"/"} className=" text-2xl font-semibold">
          CookBook
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to={"/"}>
            <a className="text-xl mr-4 hover:text-yellow-400">Home</a>
          </Link>
          <Link to={"/coffe"}>
            <a className="text-xl mr-4 hover:text-yellow-400">Coffe</a>
          </Link>
          <Link to={"/deshboard"}>
            <a className="text-xl hover:text-yellow-400">DeshBoard</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
