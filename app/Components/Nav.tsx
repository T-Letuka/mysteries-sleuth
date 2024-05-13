import React from "react";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { PiDetectiveLight } from "react-icons/pi";
import RedButton from "./Buttons/RedButton";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white shadow-xl ">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] gap-2 font-bold  flex items-center justify-center ">
          <span className="text-[27px] md:text-[40px] text-black">
            <PiDetectiveLight size={50} color="black" />
          </span>
          <span className="text-[27px] md:text-[40px] text-[#FE0000]">
            Sleuth Scribes
          </span>
        </h1>

        <ul className="hidden lg:flex item-center justify-center space-x-10 text-black">
          <li className="text-[18px] cursor-pointer text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[18px] cursor-pointer hover:underline hover:text-[#FE0000] transition-all duration-200 ">
            <Link href="/About">About</Link>
          </li>
          <li className="text-[18px] cursor-pointer hover:text-[#FE0000] transition-all duration-200 ">
            <Link href="/Cases">Cases</Link>
          </li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              border: "1px solid red",
            }}
            className="text-[18px] cursor-pointer hover:text-[#FE0000] transition-all duration-200"
          >
            <Link href="/Login">Login</Link>
          </motion.li>
        </ul>
        <div className="hidden lg:flex item-center justify-center space-x-10">
          <RedButton text="Get Started" />
        </div>
        <Bars3BottomRightIcon
          onClick={openNav}
          className="w-[1.5rem] lg:hidden h-[1.5rem text-[#FE0000] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
