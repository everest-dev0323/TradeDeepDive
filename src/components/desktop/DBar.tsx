import React from "react";
export default function MBar() {
  return (
    <div className="items-center justify-center
      flex md:h-[100px] lg:h-[150px] xl:h-[200px] ">
      <a className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" href="https://discord.gg/RgjDpBmbFw">
          <img className="w-11 h-11" src="assets/svg/discord.svg" />
      </a>
      <a className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" href="https://www.facebook.com/traderdeepdive" >
          <img className="w-11 h-11" src="assets/svg/facebook.svg" />
      </a>
      <a className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" href="https://www.instagram.com/traderdeepdive" >
          <img className="w-11 h-11" src="assets/svg/instagram.svg" />
      </a>
      <a className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" href="https://twitter.com/traderdeepdive">
          <img className="w-11 h-11" src="assets/svg/twitter.svg" />
      </a>
    </div>
  )
}
