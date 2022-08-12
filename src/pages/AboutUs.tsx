import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Tab } from "@headlessui/react";
import useWindowSize from "../components/common/WindowSizeHook";

import Who from "../components/common/Who";
import What from "../components/desktop/What";
import Why from "../components/common/Why";
import MBar from "../components/mobile/MBar";

import CustomSlider from "../components/mobile/CustomSlider";

export default function AboutUs() {
  const [selected, setSelected] = useState<number>(1)
  const [shareSelected, setShareSelected] = useState<boolean>(false)
  const size = useWindowSize();
  const status = size.width>=576?true:false
  const url = status ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  const logo = status ? 'assets/svg/logo.svg' : 'assets/imgs/logo.png'
  useEffect(()=>{
    // window.addEventListener('click', () => {
    //   alert(23);
    // })
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-cover bg-top bg-no-repeat h-screen w-screen fixed -z-10" style={{backgroundImage: `url(${url})`}}></div>
      {!shareSelected?<div className="flex justify-between items-center p-7 mx-5 sm:mx-16">
        <Link to="/" className="cursor-pointer">
          <img src={logo} className="w-1/5 sm:w-72" />
        </Link>
        {size.width>=576 ? <div className="flex items-center">
          <div className="items-center space-x-5 hidden lg:flex">
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
        </div> : <img src="./assets/svg/share.svg" className="w-1/6" onClick={()=>setShareSelected(true)} /> }
      </div>:<MBar/>}
      <div className="flex flex-col h-full">
        {selected==1?<Who/>:(selected==2?(size.width>=576?<What />:<CustomSlider/>):<Why />)}
        <div className="flex justify-evenly mb-5 sm:mb-16 md:mb-24">
          <div onClick={() => setSelected(1)} className={`${selected==1? "opacity-100": "opacity-30 scale-[0.9] hover:sm:scale-[0.9] hover:opacity-100"} text-white relative duration-500 cursor-pointer`}>
            <img src="./assets/svg/who.svg" className="m-auto w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-3xl sm:text-5xl">WHO</p>
            {status && <span className={`bg-[#ff0000] absolute -left-[25px] -bottom-[10px] h-[2px] w-[160px] block duration-500 ${selected==1? "opacity-100":"opacity-0"}`}></span>}
          </div>
          <div onClick={() => setSelected(2)} className={`${selected==2? "opacity-100": "opacity-30 scale-[0.9] hover:sm:scale-[0.9] hover:opacity-100"} text-white relative duration-500 cursor-pointer`}>
            <img src="./assets/svg/what.svg" className="m-auto w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-3xl sm:text-5xl">WHAT</p>
            {status && <span className={`bg-[#ff0000] absolute -left-[10px] -bottom-[10px] h-[2px] w-[160px] block duration-500 ${selected==2? "opacity-100":"opacity-0"}`}></span>}
          </div>
          <div onClick={() => setSelected(3)} className={`${selected==3? "opacity-100": "opacity-30 scale-[0.9] hover:sm:scale-[0.9] hover:opacity-100"} text-white relative duration-500 cursor-pointer`}>
            <img src="./assets/svg/why.svg" className="m-auto w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-3xl sm:text-5xl">WHY</p>
            {status && <span className={`bg-[#ff0000] absolute -left-[25px] -bottom-[10px] h-[2px] w-[160px] block duration-500 ${selected==3? "opacity-100":"opacity-0"}`}></span>}
          </div>
        </div>
      </div>
    </div>
  )
}
