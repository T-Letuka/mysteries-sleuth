import React from "react";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-white shadow-md">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-950">
          <span className="text-[27px] md:text-[40px] text-blue-600">S</span>
          tudy
          <span className="text-[27px] md:text-[40px] text-red-700">G</span>
          enius
        </h1>

        <ul className="hidden lg:flex item-center space-x-10">
          <li className="text-[17px] cursor-pointer text-red-950">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-pink-600 transition-all duration-200 ">
            <Link href="/LearningStyles">Learning styles</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-pink-600 transition-all duration-200 ">
            <Link href="/Quiz">Quiz</Link>
          </li>
          <li className="text-[17px] cursor-pointer hover:text-pink-600 transition-all duration-200 ">
            <Link href="/StudyTechniques">Methods</Link>
          </li>
        </ul>
        <Bars3BottomRightIcon
          onClick={openNav}
          className="w-[1.5rem] lg:hidden h-[1.5rem text-cyan-400 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
