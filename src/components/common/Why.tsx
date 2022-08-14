import React from "react";
import useWindowSize from "./WindowSizeHook";
import { Link } from "react-router-dom";

export default function Why() {
  const size = useWindowSize()
  return (
    <div className="m-auto">
      <div className="flex h-full items-center justify-center sm:justify-evenly flex-col mx-10 gap-5 sm:gap-20 sm:flex-row">
        <div className="text-white font-sans max-w-xl order-2">
          <h3 className="font-bold text-4xl hidden sm:block">Testimonials</h3>
          <p className="text-xl text-center sm:text-start">Take a listen to some of the exceptional individuals that have been through the mentor program. Here whats they have to say about the process and the people.
            <br/><br/>One day we hope we can add you to this section to help others get onboard too!s</p>
        </div>
        <img className="duration-500 hover:sm:scale-[1.1] cursor-pointer h-[80px] sm:w-[100px] sm:h-[100px] order-1" src="./assets/svg/play.svg" alt="" />
        {size.width<576 && <div className="flex justify-center mb-10 order-3">
          <Link to='/products' className="rounded-xl px-4 text-center py-2 text-sm font-medium w-[130px] bg-[#993333] text-white focus:outline-none xs:tracking-[3px]">SUBSCRIBE</Link>
        </div>}
      </div>
    </div>
  )
}
