import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const url = window.innerWidth > 768 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  return (
    <div className="bg-cover bg-top bg-no-repeat h-screen" style={{ backgroundImage: `url(${url})` }}>
      <div className="pt-8">
        <img src="./assets/svg/logo.svg" className="w-72 m-auto" />
      </div>
      <div className="text-white text-center mx-32 mt-40 m-auto">
        <h1 className=" font-[700] font-sans text-6xl">Learn Market<br />Analysis Now!</h1>
        <p className="mt-20 max-w-3xl m-auto font-sans text-1xl md:text-2xl">Here at Trader Deep Dive we do out upmost to teach you how to
          understand and analyise markets, then work that into real viable traderdeepdive
          ideas for you to action the way same day!
        </p>
        <p className="mt-24 font-serif text-[20px]">Start now and get <b><i><span className="text-[#fbb03b] text-[24px]">10% off</span></i></b> your subscription!</p>
        <div className="mt-5 flex gap-5 flex-wrap justify-center">
          <input type="text" className="h-[40px] rounded-[25px] w-[200px] px-[20px] text-black" placeholder="username" />
          <input type="email" className="h-[40px] rounded-[25px] w-[200px] px-[20px] text-black" placeholder="email" />
          <button type="button" className="h-[40px] rounded-[25px] w-[200px] px-[20px] bg-[#993333]">GET STARTED</button>
        </div>
        <div className="flex items-center justify-center mt-10">
          <input type="checkbox" className="w-[30px] h-[30px]" />
          <p className="leading-[15px] ml-3">I have read and agree to the Terms of Use as well as<br />
            <span className="text-[#2284c5] text-left">Privacy</span> and <span className="text-[#2284c5]">Cookies Policy</span>
          </p>
        </div>
      </div>
      <div className="flex items-center absolute bottom-[5px] left-1/2 -translate-x-1/2">
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
