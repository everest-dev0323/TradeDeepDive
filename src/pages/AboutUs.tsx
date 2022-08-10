import React, {useState} from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Tab } from "@headlessui/react";

export default function AboutUs() {
  const [selected, setSelected] = useState<number>(1)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const url = window.innerWidth > 768 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  return (
    <div className="bg-cover bg-top bg-no-repeat h-screen" style={{backgroundImage: `url(${url})`}}>
      <div className="flex justify-between items-center mx-16 p-7">
        <img src="./assets/svg/logo.svg" className="w-72" />
        <div className="flex items-center">
          <div className="flex items-center space-x-5">
            <Link className="block duration-100 hover:scale-[1.1]" target="_blank" to="https://discord.gg/RgjDpBmbFw">
                <img className="w-9" src="assets/svg/discord.svg" />
            </Link>
            <Link className="block duration-100 hover:scale-[1.1]" target="_blank" to="https://www.facebook.com/traderdeepdive" >
                <img className="w-9" src="assets/svg/facebook.svg" />
            </Link>
            <Link className="block duration-100 hover:scale-[1.1]" target="_blank" to="https://www.instagram.com/traderdeepdive" >
                <img className="w-9" src="assets/svg/instagram.svg" />
            </Link>
            <Link className="block duration-100 hover:scale-[1.1]" target="_blank" to="https://twitter.com/traderdeepdive">
                <img className="w-9" src="assets/svg/twitter.svg" />
            </Link>
          </div>
          <button className="rounded-3xl bg-none px-4 py-2 text-sm font-medium w-[130px] text-white focus:outline-none">FIND US</button>
          <button className="rounded-3xl px-4 py-2 text-sm font-medium w-[130px] bg-[#993333] text-white focus:outline-none">SUBSCRIBE</button>
        </div>
      </div>
        <div className="flex items-center justify-center gap-10">
          <div className="text-white font-sans max-w-xl">
            <h3 className="font-bold text-4xl">Who are we?</h3>
            <p className="text-xl">This is a bespoke trading community designed around you, helping both new and experienced traders to find their feet in the turbulent world of investing, through analysing economic data and market moving news in a fun and engaging way!</p>
          </div>
          <div className="">
            <img className="w-20" src="./assets/svg/play.svg" alt="" />
          </div>
        </div>
      <div className="md:px-40 lg:px-50 xl:px-96 w-screen absolute bottom-20">
        <div className="flex justify-between">
          <div onClick={() => setSelected(1)} className={`${selected==1? "opacity-100": "opacity-30 hover:scale-[0.9] hover:opacity-100"} text-white duration-500`}>
            <img src="./assets/svg/who.svg" className="w-8 h-8 m-auto" />
            <p className="text-5xl ">WHO</p>
            <span className={`bg-[#ff0000] h-[2px] w-30 block duration-500 ${selected==1? "opacity-100":"opacity-0"}`}></span>
          </div>
          <div onClick={() => setSelected(2)} className={`${selected==2? "opacity-100": "opacity-30 hover:scale-[0.9] hover:opacity-100"} text-white duration-500`}>
            <img src="./assets/svg/what.svg" className="w-8 h-8 m-auto" />
            <p className="text-5xl">WHAT</p>
            <span className={`bg-[#ff0000] h-[2px] w-30 block duration-500 ${selected==2? "opacity-100":"opacity-0"}`}></span>
          </div>
          <div onClick={() => setSelected(3)} className={`${selected==3? "opacity-100": "opacity-30 hover:scale-[0.9] hover:opacity-100"} text-white duration-500`}>
            <img src="./assets/svg/why.svg" className="w-8 h-8 m-auto" />
            <p className="text-5xl">WHY</p>
            <span className={`bg-[#ff0000] h-[2px] w-30 block duration-500 ${selected==3? "opacity-100":"opacity-0"}`}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
