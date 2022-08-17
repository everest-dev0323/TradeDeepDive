import React, {useState} from "react";
import useWindowSize from "./WindowSizeHook";
import VideoModal from "./VideoModal";

import { Link } from "react-router-dom";

export default function Who() {
  const size = useWindowSize();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="m-auto sm:pb-[90px]">
      {isOpened && <VideoModal url="/uploads/who.mp4" open={setIsOpened} status={false}/> }
      <div className="flex h-full items-center justify-center sm:justify-evenly flex-col mx-10 gap-5 sm:gap-28 sm:flex-row">
        <div className="text-white font-sans max-w-2xl order-2 sm:order-1 space-y-3">
          <h3 className="font-bold text-4xl hidden sm:block">Who are we?</h3>
          <p className="text-xl text-center sm:text-start leading-7">This is a bespoke trading community designed around you, helping both new and experienced traders to find their feet in the turbulent world of investing, through analysing economic data and market moving news in a fun and engaging way!</p>
        </div>
        <img className="duration-500 hover:sm:scale-[1.1] cursor-pointer h-[80px] sm:w-[100px] sm:h-[100px] order-1 sm:order-2" src="./assets/svg/play.svg" alt="" onClick={()=>setIsOpened(true)} />
      </div>
    </div>
  )
}
