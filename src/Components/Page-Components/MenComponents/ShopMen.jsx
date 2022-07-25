import React from "react";
import { MenProductData } from "./MenProductData";
import Category from '../CategoryBtn/CatB'
const ShopMen = () => {
  const productDetail = ()=>{
    console.log('you sucees mf')
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-10 md:gap-10 mx-4 md:mx-14">
      <div className="border p-2">
        <Category/>
      </div>
      <div className=" col-span-3 ">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
          {MenProductData?.map((val,i) => {
            return (
              <div key={i} onMouseOver={productDetail}>
              <div  className="text-center leading-loose" >
                 
                    <img src={val.Image} alt="" />
                    <div>
                      <h1>{val.product}</h1>
                      <p>{val.price}</p>
                    </div>
                  
              </div>
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
