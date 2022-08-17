import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';

import useWindowSize from "../components/common/WindowSizeHook";
import DBar from "../components/desktop/DBar"

export default function Main() {
  const size = useWindowSize();
  const [cookies, setCookie] = useCookies(['email']);
  let navigate = useNavigate();

  const url = size.width>576 ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  const logo = 'assets/svg/logo.svg'

  const [user, setUser] = useState({
    username: "",
    email: "",
    checked: false
  })

  const start = () => {
    let validate = 0;
    if(user.username == "") { validate = 1; toast.info("Username is required.")}
    if(user.email == "") {validate = 1; toast.info("Email is required.")}
    if(!user.checked) { validate = 1; toast.info("Please check the cookie option.")}
    if(validate == 1) return;
    setCookie('email', user.email, { path: '/' })
    navigate("/about-us");
  }

  const setUserInfo = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    document.title = "TraderDeepDive - Opt-In"
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed bg-[length:100vw_100vh] bg-top bg-no-repeat h-screen w-screen -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="my-6 sm:my-10 flex justify-center">
        <Link to="/" className="cursor-pointer">
          <img src={logo} className="w-[13vh] m-auto sm:w-[180px]" />
        </Link>
      </div>
      <div className="text-center h-full flex flex-col">
        <div className="mx-10 flex flex-col justify-evenly h-full text-center">
          <h1 className="text-2xl font-medium font-sans sm:text-5xl sm:font-[700]">Learn Market{size.width>=576?<br />:" "}Analysis Now!</h1>
          <div className="font-sans text-xl sm:text-[20px]">
            <p className="max-w-2xl m-auto leading-6 sm:leading-8">Here at Trader Deep Dive we do out upmost to teach you how to
            understand and analyse markets, then work that into real viable trade ideas for you to action the very same day!</p>
          </div>
        </div>
        <div className="mx-10">
          <p className="font-serif text-[17px] sm:text-[20px]">Start now and get <i><span className="text-[#fbb03b] text-[20px] font-bold">10% off</span></i> your subscription!</p>
          <div className="max-w-2xl m-auto mt-5 flex gap-2 flex-wrap justify-center items-center flex-col sm:flex-row sm:gap-5">
            <input type="text" className="text-black m-auto w-[270px] rounded-[10px] h-[40px] sm:rounded-[25px] sm:w-[200px] px-[20px]"
             placeholder="username" name="username" onChange={(e) => setUserInfo(e)} value={user.username}/>
            <input type="email" className="text-black m-auto w-[270px] rounded-[10px] h-[40px] sm:rounded-[25px] sm:w-[200px] px-[20px]"
             placeholder="email" name="email" onChange={(e) => setUserInfo(e)} value={user.email}/>
            <button onClick={start} className="bg-[#993333] hover:scale-105 duration-3 00 m-auto w-[270px] block leading-[40px] rounded-[10px]
             h-[40px] mt-1 sm:mt-0 sm:rounded-[25px] sm:w-[200px] px-[20px] ">GET STARTED</button>
          </div>
          <div className="flex items-center justify-center my-8 sm:mb-4 sm:mt-10 sm:w-[400px] text-left m-auto">
            <input type="checkbox" className="w-[30px] h-[30px]" checked={user.checked} onClick={()=>setUser({...user, checked:!user.checked})} />
            <p className="leading-[15px] ml-3">
              <span>I have read and agree to the <a target={"_blank"} href="/terms-of-use" className="text-[#2aa8ff]">Terms of Use</a> as well as </span>
              <span className=""><a target={"_blank"} href="/privacy-policy" className="text-[#2aa8ff]">Privacy</a> and <a target={"_blank"} href="/cookie-policy" className="text-[#2aa8ff]">Cookies Policy</a></span>
            </p>
          </div>
        </div>
      </div>
      {size.width>=576 && <DBar /> }
    </div>
  )
}
