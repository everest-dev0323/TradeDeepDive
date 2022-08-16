import React, { useState, Fragment, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

interface propType {
  title: string;
  content: string;
  reference: any;
  price: number;
  discount: number;
  status: boolean;
  color: string;
}

export default function ProductItem({
  title,
  content,
  reference,
  price,
  discount,
  status,
  color,
}: propType) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const checkedRef = useRef<HTMLInputElement>(null);
  const [cookies, setCookie] = useCookies(['email']);

  useEffect(()=> {
    document.addEventListener("click", (event: MouseEvent) => {
      const { target } = event;
      if (ref.current && target && !ref.current?.contains(target  as Node)) {
        if(!checkedRef.current?.checked) setClicked(false)
      }
    }, false);
  }, []);

  return (
    <div className="max-w-xs" ref={ref}>
      <div>
        <div className="flex gap-2" onClick={() => setClicked(true)}>
          <div>
            <svg fill={color} width="20px" height="153px">
              <rect width="15px" height="200px"></rect>
            </svg>
          </div>
          <div className="text-white font-sans">
            <div className="flex justify-between items-center">
              <p className="font-bold text-3xl block leading-6">{title}</p>
              {clicked ? (
                <div className="flex items-center">
                  <p className="mr-2">Compare</p>
                  <input type="checkbox" className="w-4 h-4" onChange={(e) =>{e.stopPropagation(); setChecked(!checked);}}  checked={checked} ref={checkedRef}/>
                </div>
              ) : (
                <></>
              )}
            </div>
            <p className="font-medium text-lg mt-6">{content}</p>
            {clicked ? (
              <ul className="mt-5 list-disc">
                {reference.map((data: any, index: number) => (
                  <Fragment key={index}>
                    <li className="">{data}</li>
                  </Fragment>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex items-center justify-around mt-5">
          <div className="-space-y-2">
            {cookies.email ? <><p
              className="relative text-lg text-[#496c7c] before:contents-[''] before:block
              before:w-16 before:h-[1px] before:bg-[#9c864f] before:absolute before:-left-2 before:bottom-3 before:-rotate-[10deg]"
            >
              ${price}
            </p>
            <p className="text-xl ml-6 text-[#fbb03b]">
              ${price - Math.ceil((price * discount) / 100)}
            </p></>: <p className="text-xl ml-6 text-[#fbb03b]">
              ${price}
            </p>
            }
          </div>
          <Link
            to="/follow-up"
            className="rounded-[20px] bg-[#933] text-center tracking-widest py-2 outline-none font-medium text-white w-[170px] duration-300 focus:outline-none hover:scale-105"
          >
            {status ? "SUBSCRIBE" : "NOTIFY ME"}
          </Link>
        </div>
      </div>
    </div>
  );
}
