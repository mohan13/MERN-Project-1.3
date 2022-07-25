import React, { useState } from "react";
// import latestImg from '../../../Images/latest.webp'
import { TrendData } from "../Trending/TrendData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const Trend = () => {
  const [Index, setIndex] = useState(0);
  const nextImage =(i)=>{
    if(i===TrendData.length){
      setIndex(0);
    }
 else{
      setIndex(i);
    }
  }
  const prevImage =(i)=>{
    if ( i<=0){
      setIndex(TrendData.length-1);
    }
    else{
      setIndex(i);
    }
  }
  return (
    <div className="md:mx-14 ">
      <div className="grid md:flex justify-between py-8 border-b-2 border-gray-500">
        <h1 className="text-xl md:text-3xl">Trending This Week</h1>
        <div className="grid grid-cols-4 gap-4 text-sm my-4 md:text-lg">
          <button>Men</button>
          <button>Women</button>
          <button>Baby</button>
          <button>Fashion</button>
        </div>
      </div>
      <div className="my-10 ">
        {TrendData?.map((val, i) => {
          if (i === Index) {
            return (
              <div key={i}>
                <div className="leading-8 flex items-center">
                  <button onClick={()=>prevImage(i-1)}>
                    <FaChevronLeft color="gray" className="w-8 h-8" />
                  </button>
                  <div>
                    <img src={val.Image} alt="" />
                    <div>
                      <h1>{val.product}</h1>
                      <p>{val.price}</p>
                    </div>
                  </div>
                  <button onClick={()=>nextImage(i+1)}>
                    <FaChevronRight color="gray" className="w-8 h-8"/>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Trend;
