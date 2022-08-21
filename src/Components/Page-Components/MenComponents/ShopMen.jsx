import React, { useState } from "react";
import { MenProductData } from "./MenProductData";
import Category from "../CategoryBtn/CatB";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineLike,
  AiOutlineZoomIn,
} from "react-icons/ai";
const ShopMen = () => {
  // const [Click,setClick] =useState(false)
  const [switchToggled, setSwitchToggled] = useState(-1);
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-10 md:gap-10 mx-4 md:mx-14">
      <div className="border p-2">
        <Category />
      </div>
      <div className="col-span-3">
        <div className="flex flex-col items-center md:grid grid-cols-3 gap-10">
          {MenProductData?.map((val, i) => {
            return (
              <div
                key={i}
                // onClick={InOut(i)}
                onMouseOver={() => setSwitchToggled(i)}
                onMouseLeave={() => setSwitchToggled(-1)}
                className="relative"
              >
                <img src={val.Image} alt=""/>
                <Link  to={{
                    pathname:"/shop",
                    search:`?id=${i}`
                  }}
                
                  state={{data:[val]}}>
                  <div>
                    <h1 className="hover:text-red-500">{val.product}</h1>
                    <p>{val.price}</p>
                  </div>
                </Link>
                <div
                  className={`absolute z-100 md:inset-x-10 lg:inset-x-8 inset-x-14 bottom-24
                    ${switchToggled === i ? " " : "hidden"}`}
                >
                  <div className="flex text-red-400">
                    <AiOutlineShoppingCart className="bg-white hover:bg-red-500 p-4 hover:text-white w-14 h-14" />
                    <AiOutlineLike className=" bg-white hover:bg-red-500 p-4 hover:text-white w-14 h-14" />
                    <AiOutlineZoomIn className=" bg-white hover:bg-red-500 p-4 hover:text-white w-14 h-14" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopMen;
