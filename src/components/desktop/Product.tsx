import React from "react";
import ProductItem from "./ProductItem";

import json from "../product.json"

export default function DProduct() {
  return (
    <div className="flex h-full mx-20">
      <div className="flex justify-evenly w-screen h-full gap-10 items-center flex-wrap">
        {json.map((data, index) => {
          return <ProductItem title={data.title} content={data.content} reference={data.reference} price={data.price} discount={data.discount} status={data.status} key={index}/>
        })}
      </div>
    </div>
  )
}
