import React from "react";
import { Link } from "react-router-dom";
export default function MBar() {
  return (
    <div className="items-center justify-center
      flex md:h-[100px] lg:h-[150px] xl:h-[200px] ">
      <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://discord.gg/RgjDpBmbFw">
          <img className="w-11 h-11" src="assets/svg/discord.svg" />
      </Link>
      <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://www.facebook.com/traderdeepdive" >
          <img className="w-11 h-11" src="assets/svg/facebook.svg" />
      </Link>
      <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://www.instagram.com/traderdeepdive" >
          <img className="w-11 h-11" src="assets/svg/instagram.svg" />
      </Link>
      <Link className="block p-5 duration-100 hover:scale-[1.1]" target="_blank" to="https://twitter.com/traderdeepdive">
          <img className="w-11 h-11" src="assets/svg/twitter.svg" />
      </Link>
    </div>
  )
}
