import React, { useState } from "react";
import { MenProductData } from "./MenProductData";
import Category from "../CategoryBtn/CatB";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart,AiOutlineLike,AiOutlineZoomIn} from 'react-icons/ai'
const ShopMen = () => {
  const [switchToggled, setSwitchToggled] = useState(-1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-10 md:gap-10 mx-4 md:mx-14">
      <div className="border p-2">
        <Category />
      </div>
      <div className=" col-span-3 ">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
          {MenProductData?.map((val, i) => {
            return (
              <div key={i} className="relative">
                <Link to="/shop">
                  <div
                    onMouseEnter={() => setSwitchToggled(i)}
                    onMouseLeave={() => setSwitchToggled(-1)}
                    className="text-center leading-loose"
                  >
                    <img src={val.Image} alt="" />
                    <div>
                      <h1>{val.product}</h1>
                      <p>{val.price}</p>
                    </div>
                    <div
                      className={
                        switchToggled === i
                          ? "absolute z-100 inset-x-10 bottom-24"
                          : "hidden"
                      }>
                      <div className="flex text-red-400 ">
                        <AiOutlineShoppingCart className="bg-white hover:bg-red-500 p-4 hover:text-white w-14 h-14"/>
                        <AiOutlineLike className=" bg-white hover:bg-red-500 p-4 hover:text-white w-14 h-14"/>
                        <AiOutlineZoomIn className=" bg-white hover:bg-red-500 p-4 hover:text-white w-14 h-14"/>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        A
      </div>
    </div>
  );
};

export default ShopMen;
