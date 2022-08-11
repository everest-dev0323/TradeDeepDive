import React from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../components/common/WindowSizeHook";
import DBar from "../components/desktop/DBar"

export default function Main() {
  const size = useWindowSize();
  const url = size.width>576 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  const logo = size.width>576 ? 'assets/svg/logo.svg' : 'assets/imgs/logo.png'
  return (
    <div className="h-full">
      <div className="fixed bg-cover bg-top bg-no-repeat h-screen w-screen -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="pt-8">
        <img src={logo} className="w-[22vh] m-auto sm:w-72" />
      </div>
      <div className="text-white text-center mx-8  m-auto mt-16 sm:mt-40 sm:mx-16 md:mx-32">
        <h1 className="text-2xl font-medium font-sans sm:text-6xl sm:font-[700]">Learn Market{size.width>=576?<br />:" "}Analysis Now!</h1>
        <p className="mt-10 max-w-3xl m-auto font-sans text-1xl sm:text-2xl sm:mt-20">Here at Trader Deep Dive we do out upmost to teach you how to
          understand and analyise markets, then work that into real viable traderdeepdive
          ideas for you to action the way same day!
        </p>
        <p className="font-serif text-[15px] mt-10 sm:text-[20px] sm:mt-24">Start now and get <b><i><span className="text-[#fbb03b] text-[15px] md:text-[24px]">10% off</span></i></b> your subscription!</p>
        <div className="mt-5 flex gap-5 flex-wrap justify-center xs:flex-col">
          <input type="text" className="h-[40px] rounded-[25px] w-[200px] px-[20px] text-black xs:m-auto xs:w-[270px] xs:rounded-[10px]" placeholder="username" />
          <input type="email" className="h-[40px] rounded-[25px] w-[200px] px-[20px] text-black xs:m-auto xs:w-[270px] xs:rounded-[10px]" placeholder="email" />
          <button type="button" className="h-[40px] rounded-[25px] w-[200px] px-[20px] bg-[#993333] xs:m-auto xs:w-[270px] xs:rounded-[10px]">GET STARTED</button>
        </div>
        <div className="flex items-center justify-center mt-10">
          <input type="checkbox" className="w-[30px] h-[30px]" />
          <p className="leading-[15px] ml-3">
            <span>I have read and agree to the Terms of Use as well as<br/></span>
            <span className="float-left"><span className="text-[#2284c5]">Privacy</span> and <span className="text-[#2284c5]">Cookies Policy</span></span>
          </p>
        </div>
      </div>
      {size.width>=576 && <DBar /> }
    </div>
  )
}
