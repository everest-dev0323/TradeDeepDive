import React from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../components/common/WindowSizeHook";
import DBar from "../components/desktop/DBar"

export default function Main() {
  const size = useWindowSize();
  const url = size.width>576 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  const logo = size.width>576 ? 'assets/svg/logo.svg' : 'assets/imgs/logo.png'
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed bg-cover bg-top bg-no-repeat h-screen w-screen -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="pt-8 flex justify-center">
        <Link to="/" className="block"><img src={logo} className="w-[20vh] sm:w-72" /></Link>
      </div>
      <div className="text-center h-full flex flex-col">
        <div className="mx-10 flex flex-col justify-evenly h-full text-center">
          <h1 className="text-2xl font-medium font-sans sm:text-6xl sm:font-[700]">Learn Market{size.width>=576?<br />:" "}Analysis Now!</h1>
          <div className="font-sans text-1xl sm:text-2xl">
            <p className="max-w-3xl m-auto">Here at Trader Deep Dive we do out upmost to teach you how to
            understand and analyise markets, then work that into real viable traderdeepdive
            ideas for you to action the way same day!</p>
          </div>
        </div>
        <div className="mx-10">
          <p className="font-serif text-[15px] sm:text-[20px]">Start now and get <b><i><span className="text-[#fbb03b] text-[15px] md:text-[24px]">10% off</span></i></b> your subscription!</p>
          <div className="max-w-2xl m-auto mt-5 flex gap-2 flex-wrap justify-center items-center flex-col sm:flex-row sm:gap-5">
            <input type="text" className="text-black m-auto w-[270px] rounded-[10px] h-[40px] sm:rounded-[25px] sm:w-[200px] px-[20px]" placeholder="username" />
            <input type="email" className="text-black m-auto w-[270px] rounded-[10px] h-[40px] sm:rounded-[25px] sm:w-[200px] px-[20px]" placeholder="email" />
            <button type="button" className="bg-[#993333] m-auto w-[270px] rounded-[10px] h-[40px] mt-1 sm:mt-0 sm:rounded-[25px] sm:w-[200px] px-[20px] ">GET STARTED</button>
          </div>
          <div className="flex items-center justify-center my-8 sm:my-10">
            <input type="checkbox" className="w-[30px] h-[30px]" />
            <p className="leading-[15px] ml-3">
              <span>I have read and agree to the <Link to="/terms-of-use" className="text-[#2aa8ff]">Terms of Use</Link> as well as<br/></span>
              <span className="float-left"><Link to="/privacy-policy" className="text-[#2aa8ff]">Privacy</Link> and <Link to="/cookie-policy" className="text-[#2aa8ff]">Cookies Policy</Link></span>
            </p>
          </div>
        </div>
      </div>
      {size.width>=576 && <DBar /> }
    </div>
  )
}
