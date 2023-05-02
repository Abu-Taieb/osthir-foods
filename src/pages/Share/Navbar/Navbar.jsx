import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-pink-100 py-2">
        <div className="flex justify-between items-center container mx-auto px-3">
          <div className="">Osthir Foods</div>
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
            <ul className={`grid md:flex md:top-3 md:gap-4 absolute ${open ? 'top-16' : '-top-40'}`}>
              <Link className="p-2 font-bold" to={"/"}>
                Home
              </Link>
              <Link className="p-2 font-bold" to={"/blog"}>
                Blog
              </Link>
            </ul>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="hello">
            <a href="" className="">
              <img
                className="w-12"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
