import React from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../components/common/WindowSizeHook";
import DBar from "../components/desktop/DBar"

export default function Main() {
  const size = useWindowSize();
  const url = size.width>576 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  const logo = 'assets/svg/logo.svg'
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed bg-[length:100vw_100vh] bg-top bg-no-repeat h-screen w-screen -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="my-6 sm:my-10 flex justify-center">
        <Link to="/" className="cursor-pointer">
          <img src={logo} className="w-[20vh] m-auto sm:w-[200px]" />
        </Link>
      </div>
      <div className="text-center h-full flex flex-col">
        <div className="mx-10 flex flex-col justify-around h-full text-center">
          <h1 className="text-2xl font-medium font-sans sm:text-6xl sm:font-[700]">Learn Market{size.width>=576?<br />:" "}Analysis Now!</h1>
          <div className="font-sans text-1xl sm:text-2xl">
            <p className="max-w-3xl m-auto leading-5 sm:leading-6">Here at Trader Deep Dive we do out upmost to teach you how to
            understand and analyise markets, then work that into real viable traderdeepdive
            ideas for you to action the way same day!</p>
          </div>
        </div>
        <div className="mx-10">
          <p className="font-serif text-[17px] sm:text-[20px]">Start now and get <i><span className="text-[#fbb03b] font-serif font-bold">10% off</span></i> your subscription!</p>
          <div className="max-w-2xl m-auto mt-5 flex gap-2 flex-wrap justify-center items-center flex-col sm:flex-row sm:gap-5">
            <input type="text" className="text-black m-auto w-[270px] rounded-[10px] h-[40px] sm:rounded-[25px] sm:w-[200px] px-[20px]" placeholder="username" />
            <input type="email" className="text-black m-auto w-[270px] rounded-[10px] h-[40px] sm:rounded-[25px] sm:w-[200px] px-[20px]" placeholder="email" />
            <Link to="/about-us" className="bg-[#993333] m-auto w-[270px] block leading-[40px] rounded-[10px] h-[40px] mt-1 sm:mt-0 sm:rounded-[25px] sm:w-[200px] px-[20px] ">GET STARTED</Link>
          </div>
          <div className="flex items-center justify-center my-8 sm:my-10 sm:w-[400px] text-left m-auto">
            <input type="checkbox" className="w-[30px] h-[30px]" />
            <p className="leading-[15px] ml-3">
              <span>I have read and agree to the <a target={"_blank"} href="/terms-of-use" className="text-[#2aa8ff]">Terms of Use</a> as well as </span>
              <span className=""><a target={"_blank"} href="/privacy-policy" className="text-[#2aa8ff]">Privacy</a> and <a target={"_blank"} href="/cookie-policy" className="text-[#2aa8ff]">Cookies Policy</a></span>
            </p>
          </div>
        </div>
      </div>
      {size.width>=576 && <DBar /> }
    </div>
  )
}
