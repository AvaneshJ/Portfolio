import React from "react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">AJ</p>
      </NavLink>
      <nav className="flex flex-wrap text-lg gap-4 sm:gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
        <div>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={
              (({ isActive }) => (isActive ? "text-blue-500" : "text-black"),
              "flex items-center")
            }
          >
            Resume
            <FaDownload size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
