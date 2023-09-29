import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "./../constants";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("");
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-pink-500 to-indigo-600 cursor-pointer`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

          <p className="text-violet-600 text-[18px] font-bold cursor-pointer flex">
            ARUN &nbsp;
            <span className="sm:block hidden text-white "> | PORTFOLIO</span>
          </p>
        </Link>

        <ul className="line-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            console.log("values", link.id);
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-pink-300" : " text-white"
                } hover:text-white text-[18px] font-medium cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <Link
                  activeClass="active"
                  to={`${link.id}`}
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                  // href={`#${link.id}`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-indigo-700 to-pink-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="line-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : " text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
