import React from "react";
import {navLinks} from "../data";
import NavLink from "./NavLink";
const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center text-white md:hidden ">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
