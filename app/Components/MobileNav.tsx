import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform transition-all ${navOpenStyle} duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#0077B6]`}
    >
      <XMarkIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"
      />

      <ul className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
        <li className="text-[25px] cursor-pointer text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 ">
          <Link href="/LearningStyles">Learning Styles</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 ">
          <Link href="/Quiz">Quiz</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 ">
          <Link href="/StudyTechniques">Methods</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
