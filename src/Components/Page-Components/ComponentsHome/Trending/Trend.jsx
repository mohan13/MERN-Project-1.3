import React, { useState } from "react";
// import latestImg from '../../../Images/latest.webp'
import { TrendData } from "../Trending/TrendData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Trend = () => {
  const [Index, setIndex] = useState(2);
  const nextImage = (i) => {
    if (i === TrendData.length) {
      setIndex(0);
    } else {
      setIndex(i);
    }
  };
  const prevImage = (i) => {
    if (i <= 0) {
      setIndex(TrendData.length - 1);
    } else {
      setIndex(i);
    }
  };
  return (
    <div className="md:mx-14 my-8 ">
      <div className="grid grid-cols-1 gap-2 py-4 md:py-0 border-b-2 md:flex justify-between items-center ">
        <h1 className="text-xl md:text-3xl">Trending This Week</h1>
        <div className="grid grid-cols-4  transitin gap-4 md:h-14 text-sm  md:text-lg">
          <div className="hover:border-b-4  border-red-500">
            <button className="">Men</button>
            
          </div>
          <div className="hover:border-b-4 border-red-500">
            <button className="">Women</button>
          </div>
          <div className="hover:border-b-4 border-red-500">
            <button className="">Baby</button>
          </div>
          <div className="hover:border-b-4 border-red-500">
            <button >Fashion</button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-2 mt-8 md:flex md:gap-10 items-center">
        {/* <button onClick={(i) => prevImage(i - 1)}>
          <FaChevronLeft color="gray" className="w-8 h-8" />
        </button> */}
        {TrendData?.map((val, i) => {
          if (i <= Index) {
            return (
              <div key={i} grid grid-cols-2>
                <Link to="/shop">
                  <div className="leading-8 ">
                    <div>
                      <img src={val.Image} alt="" />
                      <div>
                        <h1>{val.product}</h1>
                        <p>{val.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          } else {
            setIndex(i);
          }
        })}
        {/* <button onClick={(i) => nextImage(TrendData.length + 1)}>
          <FaChevronRight color="gray" className="w-8 h-8" />
        </button> */}
      </div>
    </div>
  );
};

export default Trend;
