import React from "react";
import { Link } from "react-router-dom";

interface PropsType {
  onClick: Function;
}

export default function MBar({ onClick }: PropsType) {
  return (
    <>
      <div
        onClick={() => onClick(false)}
        className="fixed top-0 left-0 w-screen h-screen"
      ></div>
      <div className="justify-center flex h-[25vw] z-10">
        <Link
          className="bg-[#02344a] flex grow duration-100"
          target="_blank"
          to="https://discord.gg/RgjDpBmbFw"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/discord.svg" />
        </Link>
        <Link
          className="bg-[#026c8e] flex grow duration-100"
          target="_blank"
          to="https://www.facebook.com/traderdeepdive"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/facebook.svg" />
        </Link>
        <Link
          className="bg-[#02344a] flex grow duration-100"
          target="_blank"
          to="https://www.instagram.com/traderdeepdive"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/instagram.svg" />
        </Link>
        <Link
          className="bg-[#026c8e] flex grow duration-100"
          target="_blank"
          to="https://twitter.com/traderdeepdive"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/twitter.svg" />
        </Link>
      </div>
    </>
  );
}
