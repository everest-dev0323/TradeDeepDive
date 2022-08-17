import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../components/common/WindowSizeHook";
import DBar from "../components/desktop/DBar"
import MBar from "../components/mobile/MBar"

export default function FollowUp() {
  const size: any = useWindowSize();
  const status: boolean = size.width>=576? true: false
  const url: string = status ? 'assets/imgs/desktop/main_bg.jpg' : 'assets/imgs/mobile/mb_products_bg.jpg'
  const bar: any = status ? <DBar/> :<MBar/>
  const logo = 'assets/svg/logo.svg'

  useEffect(() => {
    document.title = "TraderDeepDive - Follow up"
  }, [])
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-[length:100vw_100vh] bg-top bg-no-repeat w-screen h-screen fixed -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="w-full h-full flex flex-col">
        <div className="mt-6 sm:mt-10 flex justify-center">
          <Link to="/" className="cursor-pointer">
            <img src={logo} className="w-[20vh] m-auto sm:w-[200px]" />
          </Link>
        </div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col h-full items-center justify-center mx-10">
            <div className="text-white text-center">
              <h1 className="text-5xl font-bold">WELCOME!</h1>
              <p className="text-lg mt-10">WHAT'S NEXT?</p>
            </div>
            <div className="flex flex-wrap justify-between sm:justify-evenly w-full gap-5">
              <div className="w-xs sm:text-center gap-5 sm:gap-0 text-white space-y-[10px] sm:space-y-4 flex sm:block">
                <h1 className="text-[#026ca7] w-12 font-extrabold text-7xl sm:w-auto">1</h1>
                <div className="flex justify-between w-full sm:block sm:space-y-4">
                  <div className="space-y-[10px] sm:space-y-4">
                    <p>Download Discord</p>
                    <p className="block sm:hidden">Click the Icon</p>
                    <Link className="text-[#ff6e6a] hidden sm:block" to="https://discord.com/download" >https://discord.com/download</Link>
                    <p className="text-3xl hidden sm:block">Or</p>
                    <p className="hidden sm:block">If you already have it, click the discord logo!</p>
                  </div>
                  <a className="block hover:scale-110 duration-300" target={"_blank"} href="https://discord.gg/RgjDpBmbFw">
                    <img src="./assets/svg/discord.svg" className="w-14 mt-2 sm:mt-10 m-auto cursor-pointer" />
                  </a>
                </div>
              </div>
              <div className="max-w-xs sm:text-center gap-5 sm:gap-0 text-white self-end space-y-[10px] sm:space-y-4 flex sm:block">
                <h1 className="text-[#026ca7] font-extrabold text-7xl">2</h1>
                <p>Reach out to either a <span className="text-[#ff6e6a] font-bold text-lg">Mentor</span> or a <span className="text-[#fbb03b] font-bold text-lg">Mod</span> on the
                discord server and we will assign you the relevant
                permissions to access everything you need!</p>
              </div>
              <div className="max-w-xs sm:text-center gap-5 sm:gap-0 text-white self-center space-y-[10px] sm:space-y-4 flex sm:block">
                <h1 className="text-[#026ca7] font-extrabold text-7xl">3</h1>
                <p>Ben will schedule a call with you to run through
                  things. Until then, don't be shy, if you see people
                  if any of the channels go and say hi!
                </p>
              </div>
            </div>
          </div>
          {bar}
        </div>
      </div>
    </div>
  )
}
