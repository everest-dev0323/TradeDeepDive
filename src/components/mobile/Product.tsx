import React, {useState, Fragment} from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../common/WindowSizeHook";
import json from '../product.json'
import "./product.css"

export default function MProduct() {
  const [selected, setSelected] = useState<number>(1)
  const {content, reference, price, discount, status} = json[1][selected-1];
  return (
    <div className="h-full flex flex-col">
      <div className="flex text-top h-20 absolute w-full">
        <div className={`tab bg-[#6a3399] ${selected==1&&"selected"}`} onClick={()=>setSelected(1)}><span>ILLUME</span></div>
        <div className={`tab bg-[#33997d] ${selected==2&&"selected"}`} onClick={()=>setSelected(2)}><span>INSIGHT</span></div>
        <div className={`tab bg-[#993376] ${selected==3&&"selected"}`} onClick={()=>setSelected(3)}><span>PURUSE</span></div>
      </div>
      <div className="flex flex-col mx-10 h-full">
        <div className="flex flex-col text-center justify-around h-full mt-28">
          <p className="font-bold text-md">{content}</p>
          <p>{reference.map((data, index) => {
            return <Fragment key={index}>{data}<br/></Fragment>
          })}</p>
        </div>
        <div className="m-9 flex flex-col items-center space-y-6">
          <div className="-space-y-2">
            <p className="relative text-2xl text-[#496c7c] before:contents-[''] before:block
              before:w-20 before:h-[1px] before:bg-[#9c864f] before:absolute before:-left-3 before:bottom-3 before:-rotate-[10deg]">${price}</p>
            <p className="text-3xl ml-6 text-[#fbb03b]">${price-price*discount/100}</p>
          </div>
          <Link to="/papal" className="rounded-[20px] bg-[#933] px-9 tracking-widest py-2 font-medium text-white w-[170px] focus:outline-none">
            {status?"SUBSCRIBE":"NOTIFY ME"}
          </Link>
        </div>
      </div>
    </div>
  )
}