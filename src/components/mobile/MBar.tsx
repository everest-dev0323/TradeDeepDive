import React from "react";

interface PropsType {
  onClick?: Function;
}

export default function MBar({ onClick }: PropsType) {
  return (
    <>
      <div
        onClick={() => {onClick && onClick(false)}}
        className="fixed top-0 left-0 w-screen h-screen "
      ></div>
      <div className="justify-center flex h-[25vw]">
        <a
          className="bg-[#02344a] flex grow duration-100"
          target="_blank"
          href="https://discord.gg/RgjDpBmbFw"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/discord.svg" />
        </a>
        <a
          className="bg-[#026c8e] flex grow duration-100"
          target="_blank"
          href="https://www.facebook.com/traderdeepdive"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/facebook.svg" />
        </a>
        <a
          className="bg-[#02344a] flex grow duration-100"
          target="_blank"
          href="https://www.instagram.com/traderdeepdive"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/instagram.svg" />
        </a>
        <a
          className="bg-[#026c8e] flex grow duration-100"
          target="_blank"
          href="https://twitter.com/traderdeepdive"
        >
          <img className="w-11 h-11 m-auto" src="assets/svg/twitter.svg" />
        </a>
      </div>
    </>
  );
}
