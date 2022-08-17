import React, {useState} from "react";
import useWindowSize from "./WindowSizeHook";
import { Link } from "react-router-dom";

import VideoModal from "./VideoModal";

export default function Why() {
  const size = useWindowSize()
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="m-auto sm:pb-[90px]">
      {isOpened && <VideoModal url="/uploads/why.mp4" open={setIsOpened} status={false}/> }
      <div className="flex h-full items-center justify-center sm:justify-evenly flex-col mx-10 gap-5 sm:gap-28 sm:flex-row">
        <div className="text-white font-sans max-w-2xl order-2 space-y-3">
          <h3 className="font-bold text-4xl hidden sm:block">Testimonials</h3>
          <p className="text-xl text-center sm:text-start leading-7">Take a listen to some of the exceptional individuals that have been through the mentor program. Hear what's they have to say about the process and the people.
            <br/><br/>One day we hope we can add you to this section to help others get onboard too!</p>
        </div>
        <img className="duration-500 hover:sm:scale-[1.1] cursor-pointer h-[80px] sm:w-[100px] sm:h-[100px] order-1" src="./assets/svg/play.svg" alt="" onClick={()=>setIsOpened(true)}/>
      </div>
    </div>
  )
}
