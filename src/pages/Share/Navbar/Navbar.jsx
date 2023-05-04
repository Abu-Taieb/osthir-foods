import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="btn-primary py-2">
        <div className="flex justify-between items-center container mx-auto px-3">
          <div className="font-bold">
            {" "}
            <Link to={"/"}>Osthir Foods</Link>{" "}
          </div>
          <div className="">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <span>
                {open === true ? (
                  <XMarkIcon className="h-6 w-6 text-blue-500" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-blue-500" />
                )}
              </span>
            </div>
            <ul
              className={`grid md:flex md:top-3 md:gap-4 absolute ${
                open ? "top-16" : "-top-40"
              }`}
            >
              <NavLink className="p-2 font-bold nabLinkBorder" to={"/"}>
                Home
              </NavLink>
              <NavLink className="p-2 font-bold nabLinkBorder" to={"/blog"}>
                Blog
              </NavLink>
            </ul>
          </div>
          <div className="flex">
            <a
              href=""
              className="tooltip tooltip-bottom"
              data-tip={`displayName`}
            >
              <img
                className="w-12 rounded-full"
                src={`https://lh3.googleusercontent.com/a/AGNmyxZBT3w0oFj2O6QFHSZDOv_93KrIiXzjWY_C36s6og=s96-c`}
                alt=""
              />
            </a>
            <Link className="p-2 font-bold" to={"/login"}>
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
