import React, {useEffect, useRef, useState} from "react";
import ReactPlayer from 'react-player'
// import ModalVideo from 'react-modal-video'
// import useWindowSize from './WindowSizeHook'
// import '../../../node_modules/react-modal-video/scss/modal-video.scss';

interface propType{
  url: string;
  open: Function;
  status: boolean;
}

export default function VideoModal({url, open, status}: propType) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="absolute h-[100%] w-[100vw] bg-[#ffb4b42b] top-0 left-0 z-20 flex justify-center items-center" onClick={()=>open(status)}>
      <div className="relative w-4/5 sm:w-1/2">
        <video className="top-1/2" autoPlay controls onEnded={()=>open(status)}>
          <source src={url} type="video/mp4" />
        </video>
        <span className="absolute text-[30px] block top-0 right-5 cursor-pointer" onClick={()=>open(false)}>&times;</span>
      </div>
    </div>
  )
}
