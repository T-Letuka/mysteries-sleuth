import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform transition-all ${navOpenStyle} duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#010B13]`}
    >
      <XMarkIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"
      />

      <ul className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          className="text-[25px] cursor-pointer text-white"
        >
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 "
        >
          <Link href="/About">About</Link>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 "
        >
          <Link href="/Cases">Cases</Link>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            border: "1px solid red",
          }}
          className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 "
        >
          <Link href="/Login">LOGIN</Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default MobileNav;
