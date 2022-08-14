import React, {useState} from "react";
import ReactPlayer from 'react-player'

interface propType{
  url: string;
  close: Function;
}

export default function VideoModal({url, close}: propType) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div className="absolute h-[100%] w-[100vw] bg-[#ffb4b42b] top-0 left-0 z-20">
      <div className="absolute h-[100%] w-[100%] sm:h-[60%] sm:w-[60%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ReactPlayer
            url={"https://streamable.com/ofj1gu"}
            playing={false}
            controls={false}
            loop={false}
            muted={true}
            playsinline={true}
            onReady={onLoadedData}
            onEnded={() => close(false)}
            width="100%"
            height="100%"
          />
        <img src="assets/svg/close.svg"  className="absolute top-0 right-0 w-10 h-10"/>
      </div>
    </div>
  )
}
