import React from "react";
import useWindowSize from "./WindowSizeHook";
import { Link } from "react-router-dom";

export default function Who() {
  const size = useWindowSize();
  return (
    <div className="flex h-full items-center justify-center sm:justify-evenly flex-col mx-10 gap-5 sm:flex-row">
      <div className="text-white font-sans max-w-xl order-2 sm:order-1">
        <h3 className="font-bold text-4xl hidden sm:block">Who are we?</h3>
        <p className="text-xl text-center sm:text-start">This is a bespoke trading community designed around you, helping both new and experienced traders to find their feet in the turbulent world of investing, through analysing economic data and market moving news in a fun and engaging way!</p>
      </div>
      <img className="duration-100 hover:sm:scale-[1.1] cursor-pointer h-[80px] sm:w-[100px] sm:h-[100px] order-1 sm:order-2" src="./assets/svg/play.svg" alt="" />
      {size.width<576 && <div className="flex justify-center mb-10 order-3">
        <Link to='/products' className="rounded-xl px-4 text-center py-2 text-sm font-medium w-[130px] bg-[#993333] text-white focus:outline-none xs:tracking-[3px]">SUBSCRIBE</Link>
      </div>}
    </div>
  )
}
