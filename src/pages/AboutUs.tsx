import React, { useState, useEffect, useRef } from "react";
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
  const [selected, setSelected] = useState<number>(1);
  const [shareSelected, setShareSelected] = useState<boolean>(false);
  const [showSocial, setShowSocial] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const size = useWindowSize();
  const status: boolean = size.width >= 576 ? true : false;
  const url: string = status
    ? "assets/imgs/desktop/main_bg.jpg"
    : "assets/imgs/mobile/mb_about_bg.jpg";
  const logo:string = "assets/svg/logo.svg";
  const ref = useRef<HTMLInputElement>(null);

  function openSocial() {
    setShowSocial(true);
  }

  useEffect(()=> {
    document.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowSocial(false);
        setClicked(false);
      }
    }, false);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div
        className="bg-[length:100vw_100vh] bg-top bg-no-repeat h-screen w-screen fixed -z-10"
        style={{ backgroundImage: `url(${url})` }}
      ></div>

      {!shareSelected ? (
        <div className="flex justify-between items-center mx-5 h-[25vw] sm:mx-16 sm:my-10 sm:h-[100px]">
          <Link to="/" className="cursor-pointer">
            <img src={logo} className="w-1/6 sm:w-[100px]" />
          </Link>
          {size.width >= 576 ? (
            <div className="flex items-center">
              <div className="flex" onClick={() => {event?.stopPropagation(); openSocial(); setClicked(true)}}
              onMouseOver={() => {if(!clicked) setShowSocial(true)}}
              onMouseOut={() => {setShowSocial(clicked)}}>
                {showSocial && (
                  <div className="items-center space-x-5 sm:flex" ref={ref}>
                    <a
                      className="block duration-300 hover:scale-[1.2]"
                      target="_blank"
                      href="https://discord.gg/RgjDpBmbFw"
                    >
                      <img className="w-9" src="assets/svg/discord.svg" />
                    </a>
                    <a
                      className="block duration-300 hover:scale-[1.2]"
                      target="_blank"
                      href="https://www.facebook.com/traderdeepdive"
                    >
                      <img className="w-9" src="assets/svg/facebook.svg" />
                    </a>
                    <a
                      className="block duration-300 hover:scale-[1.2]"
                      target="_blank"
                      href="https://www.instagram.com/traderdeepdive"
                    >
                      <img className="w-9" src="assets/svg/instagram.svg" />
                    </a>
                    <a
                      className="block duration-300 hover:scale-[1.2]"
                      target="_blank"
                      href="https://twitter.com/traderdeepdive"
                    >
                      <img className="w-9" src="assets/svg/twitter.svg" />
                    </a>
                  </div>
                )}
                <button
                  className="rounded-3xl bg-none px-4 py-2 text-sm font-medium w-[130px] text-white hover:scale-105 duration-300 outline-none"
                >
                  FIND US
                </button>
              </div>
              <Link
                to="/products"
                className="rounded-3xl px-4 text-center py-2 text-sm font-medium w-[130px] bg-[#993333] text-white outline-none hover:scale-105 duration-300"
              >
                SUBSCRIBE
              </Link>
            </div>
          ) : (
            <img
              src="./assets/svg/share.svg"
              className="w-12"
              onClick={() => setShareSelected(true)}
            />
          )}
        </div>
      ) : (
        <MBar
          onClick={(val: boolean) => {
            setShareSelected(val);
          }}
        />
      )}
      <div className="flex flex-col h-full">
        {selected == 1 ? (
          <Who />
        ) : selected == 2 ? (
          size.width >= 576 ? (
            <What />
          ) : (
            <div className="flex flex-col h-full">
              <CustomSlider />
              <Link
                to="/products"
                className="mx-auto mb-[40px] block sm:hidden rounded-3xl px-4 text-center py-2 text-sm font-medium w-[130px] bg-[#993333] text-white focus:outline-none hover:scale-105 hover:font-bold duration-300"
              >
                SUBSCRIBE
              </Link>
            </div>
          )
        ) : (
          <Why />
        )}
        <div className="flex justify-evenly mb-5 sm:mb-16 sm:mx-20 md:mb-24 md:mx-48">
          <div
            onClick={() => setSelected(1)}
            className={`${
              selected == 1
                ? "opacity-100"
                : "opacity-30 scale-[0.9] sm:scale-100 hover:sm:scale-[0.9] hover:opacity-100"
            } text-white relative duration-500 cursor-pointer`}
          >
            <img
              src="./assets/svg/who.svg"
              className="m-auto w-auto h-6 sm:w-auto sm:h-6"
            />
            <p className="text-2xl sm:text-4xl mt-2">WHO</p>
            {status && (
              <span
                className={`bg-[#ff0000] absolute -bottom-[25px] -translate-x-1/2 left-1/2 h-[2px] w-[160px] block duration-500 ${
                  selected == 1 ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            )}
          </div>
          <div
            onClick={() => setSelected(2)}
            className={`${
              selected == 2
                ? "opacity-100"
                : "opacity-30 scale-[0.9] sm:scale-100 hover:sm:scale-[0.9] hover:opacity-100"
            } text-white relative duration-500 cursor-pointer`}
          >
            <img
              src="./assets/svg/what.svg"
              className="m-auto w-auto h-6 sm:w-auto sm:h-6"
            />
            <p className="text-2xl sm:text-4xl mt-2">WHAT</p>
            {status && (
              <span
                className={`bg-[#ff0000] absolute -bottom-[25px] -translate-x-1/2 left-1/2 h-[2px] w-[160px] block duration-500 ${
                  selected == 2 ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            )}
          </div>
          <div
            onClick={() => setSelected(3)}
            className={`${
              selected == 3
                ? "opacity-100"
                : "opacity-30 scale-[0.9] sm:scale-100 hover:sm:scale-[0.9] hover:opacity-100"
            } text-white relative duration-500 cursor-pointer`}
          >
            <img
              src="./assets/svg/why.svg"
              className="m-auto w-auto h-6 sm:w-auto sm:h-6"
            />
            <p className="text-2xl sm:text-4xl mt-2">WHY</p>
            {status && (
              <span
                className={`bg-[#ff0000] absolute -bottom-[25px] -translate-x-1/2 left-1/2 h-[2px] w-[160px] block duration-500 ${
                  selected == 3 ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
