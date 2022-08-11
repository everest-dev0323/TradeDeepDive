import React, {useState} from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Tab } from "@headlessui/react";
import useWindowSize from "../components/common/WindowSizeHook";

import Who from "../components/common/Who";
import What from "../components/desktop/What";
import Why from "../components/common/Why";

import CustomSlider from "../components/mobile/CustomSlider";

export default function AboutUs() {
  const [selected, setSelected] = useState<number>(1)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const size = useWindowSize();
  const url = size.width > 576 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  const logo = size.width > 576 ? 'assets/svg/logo.svg' : 'assets/imgs/logo.png'
  return (
    <div className="flex flex-col bg-cover bg-top bg-no-repeat h-screen" style={{backgroundImage: `url(${url})`}}>
      <div className="flex justify-between items-center p-7 xs:mx-5 sm:mx-16">
        <Link to="/" className="cursor-pointer">
          <img src={logo} className="w-72 xs:w-24" />
        </Link>
        {size.width>=576 ? <div className="flex items-center">
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
            <Link to='/products' className="rounded-3xl px-4 text-center py-2 text-sm font-medium w-[130px] bg-[#993333] text-white focus:outline-none">SUBSCRIBE</Link>
        </div> : <img src="./assets/svg/share.svg" className="w-16" /> }
      </div>
      <div className="flex flex-col-reverse h-full justify-around">
        <div className="flex justify-evenly xs:mb-10 sm:mb-24">
          <div onClick={() => setSelected(1)} className={`${selected==1? "opacity-100": "opacity-30 hover:scale-[0.9] hover:opacity-100"} text-white duration-500 cursor-pointer`}>
            <img src="./assets/svg/who.svg" className="w-8 h-8 m-auto xs:w-7 xs:h-7" />
            <p className="text-5xl xs:text-4xl">WHO</p>
            <span className={`bg-[#ff0000] h-[2px] w-30 block duration-500 ${selected==1? "opacity-100":"opacity-0"}`}></span>
          </div>
          <div onClick={() => setSelected(2)} className={`${selected==2? "opacity-100": "opacity-30 hover:scale-[0.9] hover:opacity-100"} text-white duration-500 cursor-pointer`}>
            <img src="./assets/svg/what.svg" className="w-8 h-8 m-auto xs:w-7 xs:h-7" />
            <p className="text-5xl xs:text-4xl">WHAT</p>
            <span className={`bg-[#ff0000] h-[2px] w-30 block duration-500 ${selected==2? "opacity-100":"opacity-0"}`}></span>
          </div>
          <div onClick={() => setSelected(3)} className={`${selected==3? "opacity-100": "opacity-30 hover:scale-[0.9] hover:opacity-100"} text-white duration-500 cursor-pointer`}>
            <img src="./assets/svg/why.svg" className="w-8 h-8 m-auto xs:w-7 xs:h-7" />
            <p className="text-5xl xs:text-4xl">WHY</p>
            <span className={`bg-[#ff0000] h-[2px] w-30 block duration-500 ${selected==3? "opacity-100":"opacity-0"}`}></span>
          </div>
        </div>
        {size.width<576 && <div className="flex justify-center mb-10">
          <Link to='/products' className="rounded-xl px-4 text-center py-2 text-sm font-medium w-[130px] bg-[#993333] text-white focus:outline-none">SUBSCRIBE</Link>
        </div>}
        {selected==1?<Who/>:(selected==2?(size.width>=576?<What />:<CustomSlider/>):<Why />)}
      </div>
    </div>
  )
}
