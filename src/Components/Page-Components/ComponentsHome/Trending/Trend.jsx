import React from "react";
// import latestImg from '../../../Images/latest.webp'
import { TrendData } from "../Trending/TrendData";
const Trend = () => {
  return (
    <div className="mx-14 ">
      <div className="grid md:flex justify-between py-8 border-b-2 border-gray-500">
        <h1 className="text-xl md:text-3xl">Trending This Week</h1>
        <div className="grid grid-cols-4 gap-4 text-sm my-4 md:text-lg">
          <button>Men</button>
          <button>Women</button>
          <button>Baby</button>
          <button>Fashion</button>
        </div>
      </div>
      <div className="my-10 grid md:flex gap-6">
        {TrendData?.map((val) => {
          return (
            <div className="leading-8 flex">
              <div>
                <img src={val.Image} alt="" />
                <h1>{val.product}</h1>
                <p>{val.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trend;
