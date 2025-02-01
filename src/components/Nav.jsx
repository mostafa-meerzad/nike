"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { hamburger, xmark } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const menuVariants = {
  open: {
    clipPath: "circle(500px at 90% 5%)",
    transition: { type: "spring", stiffness: 25, restDelta: 2 },
  },
  closed: {
    clipPath: "circle(20px at 90% 8%)",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

const itemVariants = {
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
  }),
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 w-full absolute z-50">
      <nav className="flex justify-between items-center max-container relative py-4 h-min">
        <a href="/">
          <img src={headerLogo} alt="logo" height={20} width={120} />
        </a>

        {/* Desktop Nav */}
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

        {/* Mobile Menu Toggle */}
        <div
          className="hidden max-lg:block absolute right-4 top-4  z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? xmark : hamburger}
            alt="menu"
            width={18}
            height={18}
          />
        </div>

        {/* Animated Mobile Menu */}
        <motion.ul
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="flex flex-col justify-center items-start gap-5 rounded-md z-40 absolute top-0 right-0 bg-slate-800 p-8 w-64 h-80 lg:hidden  "
        >
          {navLinks.map((item, i) => (
            <motion.li key={item.label} variants={itemVariants} custom={i}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-md text-white"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Nav;
