import React from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../components/common/WindowSizeHook";
import DProduct from "../components/desktop/Product";
import MProduct from "../components/mobile/Product";

const json = [
  {
    "title":"Illume",
    "content": "Illume is an exclusive mentor program designed to take your investment knowledge to new heights.",
    "reference": ["Limited Availability","Personal Mentoring","Daily Abrnalyis","Live Trading Room","Market Insights","Investor Psychology","Community Discord","Access To In-House Resources","Dedicated Support Team"],
    "price": 900,
    "discount": 10,
    "status": true
  },{
    "title":"Insight",
    "content": "Insight offers you daily views on the events that are shaping companies, industries and markets around the world.",
    "reference": ["Limited Availability","Personal Mentoring","Daily Abrnalyis","Live Trading Room","Market Insights","Investor Psychology","Community Discord","Access To In-House Resources","Dedicated Support Team"],
    "price": 500,
    "discount": 10,
    "status": true
  },{
    "title":"Pursue",
    "content": "The Pursue pathway is an end to end video course like no other, giving you the tools you need to launch your trading career.",
    "reference": ["Limited Availability","Personal Mentoring","Daily Abrnalyis","Live Trading Room","Market Insights","Investor Psychology","Community Discord","Access To In-House Resources","Dedicated Support Team"],
    "price": 242,
    "discount": 10,
    "status": false
  },
]

export default function Product() {
  const size = useWindowSize()
  const status = size.width >= 576?true:false
  const url = status ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="bg-cover bg-top bg-no-repeat h-screen w-screen fixed -z-10" style={{backgroundImage: `url(${url})`}}></div>
      {status&&<div className="flex mx-16 my-10">
        <Link to="/" className="cursor-pointer">
          <img src="./assets/svg/logo.svg" className="w-72" />
        </Link>
      </div>}
      {status?<DProduct/>:<MProduct/>}
    </div>
  )
}
