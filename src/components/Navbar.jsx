/* eslint-disable eol-last */
import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBarItem = ({ title, classprops, path }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <Link to={path}>{title}</Link>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="blur-sec w-full top-0 z-50 fixed flex justify-between items-center p-4">
      <Link to="/" className="text-white mt-2">
        <div className="flex flex-row gap-1 items-center justify-center w-22 md:ml-40 ">
          <h2 className="text-yellow-300">Yellow</h2>
          <span style={{ color: "violet" }}>Flash</span>
        </div>
      </Link>
      <div className="flex flex-row justify-evenly h-[50px] md:mr-40">
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["About", "Service", "Work", "Solution", "Contact"].map(
            (item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                path={`https://reaplicate-ganeshcom.vercel.app/${item.toLowerCase()}`}
              />
            )
          )}
        </ul>
        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["About", "Service", "Work", "Solution", "Contact"].map(
                (item, index) => (
                  <NavBarItem
                    key={item + index}
                    title={item}
                    path={`https://reaplicate-ganeshcom.vercel.app/${item.toLowerCase()}`}
                    classprops="my-2 text-lg"
                  />
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
