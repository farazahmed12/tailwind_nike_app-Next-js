import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="z-10 absolute w-full padding-x py-10">
      <nav className="flex justify-between items-center max-container">
        <a className="" href="/">
          <img src={`/images/header-logo.svg`} width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center  gap-16 max-lg:hidden">
          {navLinks.map((item, i) => (
            <li key={i}>
              <a className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="">
          <img
            src={`/icons/hamburger.svg`}
            alt="hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
