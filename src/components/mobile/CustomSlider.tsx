import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import json from "../slider.json";

import "./carousel.css"

export default function CustomSlider() {
  return (
    <div className="flex h-full items-center sm:px-11">
      <Carousel className="w-full" showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true}>
        {
          json.map((data, index) => {
            return (
              <div key={index} className="text-white text-center space-y-12">
                <h2 className="font-bold text-3xl">{data.title}</h2>
                <p className="text-[20px]">{data.content}</p>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}

