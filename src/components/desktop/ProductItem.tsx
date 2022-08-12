import React, {useState, Fragment} from "react";
import { Link } from "react-router-dom";

interface propType {
  title: string;
  content: string;
  reference: any;
  price: number;
  discount: number;
  status: boolean;
}

export default function ProductItem({title, content, reference, price, discount, status}: propType) {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className="max-w-xs">
      <div>
        <div className="flex gap-2" onClick={() => setChecked(true)}>
          <div>
            <svg className="fill-[#6a3399]" width="20px" height="170px">
              <rect width="15px" height="200px"></rect>
            </svg>
          </div>
          <div className="text-white font-sans">
            <div className="flex justify-between items-center">
              <p className="font-bold text-3xl block">{title}</p>
              { checked ? <div className="flex items-center">
                <p className="mr-2">Compare</p>
                <input type="checkbox" className="w-4 h-4" />
              </div>:<></>}
            </div>
            <p className="font-medium text-lg mt-6">{content}</p>
            {
              checked?<div className="mt-5 ">{reference.map((data: any, index: number)=> <Fragment key={index}>{data}<br/></Fragment>)}</div>:<></>
            }
          </div>
        </div>
        <div className="flex items-center justify-around mt-5">
          <div className="-space-y-2">
            <p className="relative text-lg text-[#496c7c] before:contents-[''] before:block
              before:w-16 before:h-[1px] before:bg-[#9c864f] before:absolute before:-left-2 before:bottom-3 before:-rotate-[10deg]">${price}</p>
            <p className="text-xl ml-6 text-[#fbb03b]">${price-price*discount/100}</p>
          </div>
          <Link to="/papal" className="rounded-[20px] bg-[#933] px-9 tracking-widest py-2 font-medium text-white w-[170px] focus:outline-none">
            {status?"SUBSCRIBE":"NOTIFY ME"}
          </Link>
        </div>
      </div>
    </div>
  )
}
