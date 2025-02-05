import React from "react";

const Navbar = () => {
  return (
    <div className="bg-amber-400 pl-8 pr-8 pt-4 pb-4  rounded-xl w-max mx-auto">
      <div className="max-w-screen-sm mx-auto flex items-center">
        <div>
          <a
            href="#Home"
            className=" hover:text-white mx-4 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className=" hover:text-white mx-4 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#projects"
            className=" hover:text-white mx-4 transition duration-300"
          >
            Products
          </a>
          <a
            href="#contact"
            className=" hover:text-white mx-4 transition duration-300"
          >
            Contact
          </a>
          <a
            href="/signup"
            className=" hover:text-amber-800 hover:font-bold mx-4 transition duration-300  bg-amber-800  hover:bg-amber-300 p-2 px-4 text-white rounded-3xl"
          >
            Sign Up
          </a>
          <a
            href="/signin"
            className=" hover:text-green-800 hover:font-bold  bg-green-800 hover:bg-green-300 p-2 px-4 text-white rounded-3xl transition duration-300"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
