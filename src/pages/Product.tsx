import React from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../components/common/WindowSizeHook";
import DProduct from "../components/desktop/Product";
import MProduct from "../components/mobile/Product";

export default function Product() {
  const size = useWindowSize()
  const status = size.width >= 576?true:false
  const url = status ? 'assets/imgs/desktop/main_bg.jpg' : 'assets/imgs/mobile/mb_products_bg.jpg'
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="bg-cover bg-top bg-no-repeat h-screen w-screen fixed -z-10" style={{backgroundImage: `url(${url})`}}></div>
      {status&&<div className="flex mx-16 my-10">
        <Link to="/" className="cursor-pointer">
          <img src="./assets/svg/logo.svg" className="w-1/6 sm:w-[100px]" />
        </Link>
      </div>}
      {status?<DProduct/>:<MProduct/>}
    </div>
  )
}
