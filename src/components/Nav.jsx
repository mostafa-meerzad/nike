import { headerLogo } from "../assets/images";
import { hamburger, xmark } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="padding-x py-8 w-full absolute z-50">
      <nav className="flex justify-between items-center max-container relative ">
        <a href="/">
          <img src={headerLogo} alt="logo" height={20} width={120} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-sm text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block " onClick={openMenu}>
          <img src={hamburger} alt="menu" width={18} height={18} />
        </div>

        <ul
          className={`flex-col justify-center items-start gap-4 rounded-md z-50 absolute top-0 right-0 bg-slate-800 p-8 pt-16  ${
            isMenuOpen ? "flex lg:hidden" : "hidden"
          } `}
        >
          <div className="absolute top-4 left-4 " onClick={closeMenu}>
            <img src={xmark} alt="close menu" width={18} height={18} />
          </div>

          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-sm text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
