import React from "react";

export default function Main() {
  const url = window.innerWidth > 768 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  return (
    <div className="bg-cover bg-top bg-no-repeat h-screen" style={{backgroundImage: `url(${url})`}}>
      <div className="pt-5">
        <img src="./assets/svg/logo.svg" className="w-[20vw] m-auto" />
      </div>
      <div className="text-white text-center max-w-[800px] m-auto">
        <h1 className="text-[30px]"><p>Learn Market</p><p>analysis now!</p></h1>
        <p>Here at Trader Deep Dive we do out upmost to teach you how to
          understand and analyise markets, then work that into real viable traderdeepdive
          ideas for you to action the way same day!
        </p>
        <p>Start now and get <b><i><span className="text-[#fbb03b] text-[24px]">10% off</span></i></b> your subscription!</p>
      </div>
      <div></div>
    </div>
  )
}
