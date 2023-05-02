import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-pink-100 py-2">
        <div className="flex justify-between items-center container mx-auto">
          <div className="">Osthir Foods</div>
          <div className="">
            <ul className="flex gap-5">
              <li>
                <a className="p-2 font-bold" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="p-2 font-bold" href="">
                  Blog
                </a>
              </li>
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
      </div>
    </>
  );
};

export default Header;
