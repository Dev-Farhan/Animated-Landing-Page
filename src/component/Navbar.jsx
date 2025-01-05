import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-3 py-5 text-2xl font-semibold md:px-32">
      <span className="font-bold">King</span>

      {/* Menu Icon for Mobile */}
      <span onClick={toggleMenu} className=" md:hidden">
        <MdMenu />
      </span>

      {/* Navbar Links */}
      <div className="hidden font-medium md:flex md:items-center md:gap-16 space-x-4 text-lg">
        <Link to="/" className="hover:text-blue-500">
          Shop
        </Link>
        <Link to="/brands" className="hover:text-blue-500">
          Brands
        </Link>
        <Link to="/contact" className="hover:text-blue-500">
          Contact us
        </Link>
        <button className="bg-black text-white px-6 py-2 rounded-3xl text-base">
          Sign up
        </button>
      </div>

      {/* Mobile Menu */}

      {/* Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <IoClose />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center gap-8 text-xl">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          {/* <Link to="/" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
