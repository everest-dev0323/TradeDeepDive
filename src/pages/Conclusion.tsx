import React from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../components/common/WindowSizeHook";

export default function Conclusion() {
  const size = useWindowSize();
  const url = size.width >= 576 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  return (
    <div className="flex flex-col h-full">
      <div className="bg-cover bg-top bg-no-repeat h-screen fixed -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="flex flex-col w-full h-full items-center justify-around">
        <div className="text-white text-center mt-[150px]">
          <h1 className="text-5xl font-bold">WELCOME!</h1>
          <p className="text-lg mt-10">WHATS NEXT?</p>
        </div>
        <div className="flex justify-evenly w-full h-full pb-32 xs:flex-col">
          <div className="max-w-xs text-center text-white space-y-4">
            <h1 className="text-[#026ca7] font-extrabold text-7xl">1</h1>
            <p>Download Discord</p>
            <Link className="block text-[#ff6e6a]" to="https://discord.com/download" >https://discord.com/download</Link>
            <p className="text-3xl">Or</p>
            <p>If you already have it, click the discord logo!</p>
            <img src="./assets/svg/discord.svg" className="w-14 h-20 m-auto" />
          </div>
          <div className="max-w-xs text-center text-white space-y-5 self-end">
            <h1 className="text-[#026ca7] font-extrabold text-7xl">2</h1>
            <p>Reach out to either a <span className="text-[#ff6e6a] font-medium text-lg">Mentor</span> or a <span className="text-[#fbb03b] font-medium text-lg">Mod</span> on the
            discord server and we will asign you the relievent
            permissions to access everything you need!</p>
          </div>
          <div className="max-w-xs text-center text-white space-y-5 self-center">
            <h1 className="text-[#026ca7] font-extrabold text-7xl">3</h1>
            <p>Ben will schedule a call with you to run through
              things. Untils then, don't be shy, if you see people
              if any of the channels go and say hi!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-[200px] ">
        <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://discord.gg/RgjDpBmbFw">
            <img className="w-11" src="assets/svg/discord.svg" />
        </Link>
        <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://www.facebook.com/traderdeepdive" >
            <img className="w-11" src="assets/svg/facebook.svg" />
        </Link>
        <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://www.instagram.com/traderdeepdive" >
            <img className="w-11" src="assets/svg/instagram.svg" />
        </Link>
        <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://twitter.com/traderdeepdive">
            <img className="w-11" src="assets/svg/twitter.svg" />
        </Link>
      </div>
    </div>
  )
}
