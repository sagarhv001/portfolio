"use client";
import Link from "next/link";
import Navlink from "./navlinks";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/portfolio", text: "Portfolio" },
  { url: "/contact", text: "Contact" },
];

const top = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  
  const middle = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  
  const bottom = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
const listvar = {
  closed:{
    x:"100vw",
    transition:{
      duration:0.1,
    }

  },
  opened:{
    x:"0",
    transition:{
      when : "beforeChildren", 
      staggerChildren:0.1,
    }
  }
};

const listitemvar = {
  closed:{
    x:-10,
    opacity:0,
  },
  opened:{
    x:0,
    opacity:1,
  }
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          /** Renders a NavLink component for each link object in props.links.
           * Each NavLink contains the link url and text.
           * A key prop is passed to each NavLink using the link title
           * to help React distinguish each component instance.
           */
          <Navlink link={link} key={link.url} />
        ))}
      </div>

      {/*logo*/}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center "
        >
          <span className="text-white mr-1">sagarhv</span>
          <span className="w-8 h-8 rounded bg-white text-black flex items-center justify-center">
            001
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4 w-1/3">
        <Link href="https://github.com/sagarhv001">
          <Image src="/github.png" alt="" width={24} height={24} unoptimized />
        </Link>

        <Link href="https://www.instagram.com/sagarhv001/">
          <Image src="/instagram.png" alt="" width={24} height={24} unoptimized/>
        </Link>

        <Link href="https://www.linkedin.com/in/sagar-h-v/">
          <Image src="/linkedin.png" alt="" width={24} height={24} unoptimized />
        </Link>
      </div>
      {/*menu*/}

      <div className="md:hidden">
        <button
          className="w-8 h-7 flex flex-col justify-between z-50 position relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            variants={top}
            animate={isOpen? "opened" : "closed"}
            className="w-8 h-1 rounded bg-black origin-left"
          ></motion.div>
          <motion.div
            variants={middle}
            animate={isOpen? "opened" : "closed"}
            className="w-8 h-1 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottom}
            animate={isOpen? "opened" : "closed"}
            className="w-8 h-1 rounded bg-black origin-left"
          ></motion.div>
        </button>
        {isOpen && (
          <motion.div variants={listvar} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40">
            {links.map((link,) => (
            <motion.div variants={listitemvar} key={link.url}>
                <Link href={link.url}  className="">
                {link.text}
              </Link>

            </motion.div>
              
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
