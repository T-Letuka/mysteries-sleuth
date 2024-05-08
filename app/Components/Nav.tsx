import React from "react";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import RedButton from "./Buttons/RedButton";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-black shadow-xl ">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] font-bold text-[#FE0000]">
          <span className="text-[27px] md:text-[40px] text-white">S</span>
          leuth
          <span className="text-[27px] md:text-[40px] text-white">S</span>
          scribes
        </h1>

        <ul className="hidden lg:flex item-center justify-center space-x-10 text-white">
          <li className="text-[18px] cursor-pointer text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[18px] cursor-pointer hover:underline hover:text-[#FE0000] transition-all duration-200 ">
            <Link href="/Cases">Cases</Link>
          </li>
          <li className="text-[18px] cursor-pointer hover:text-[#FE0000] transition-all duration-200 ">
            <Link href="/Murder">Murder Cases</Link>
          </li>
          <li className="text-[18px] cursor-pointer hover:text-[#FE0000] transition-all duration-200 ">
            <Link href="/Riddles">Riddles</Link>
          </li>
        </ul>

        <Bars3BottomRightIcon
          onClick={openNav}
          className="w-[1.5rem] lg:hidden h-[1.5rem text-[#FE0000] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
