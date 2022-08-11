import React from "react";
import useWindowSize from "./WindowSizeHook";

export default function Who() {
  const size = useWindowSize();
  return (
    <div className="flex h-full items-center justify-evenly xs:flex-col-reverse xs:mx-28 sm:mx-16">
      <div className="text-white font-sans max-w-xl">
        <h3 className="font-bold text-4xl xs:hidden">Who are we?</h3>
        <p className="text-xl xs:text-center">This is a bespoke trading community designed around you, helping both new and experienced traders to find their feet in the turbulent world of investing, through analysing economic data and market moving news in a fun and engaging way!</p>
      </div>
      <div className="duration-100 hover:scale-[1.1] cursor-pointer">
        <img className="min-w-[100px] min-h-[100px]" src="./assets/svg/play.svg" alt="" />
      </div>
    </div>
  )
}
