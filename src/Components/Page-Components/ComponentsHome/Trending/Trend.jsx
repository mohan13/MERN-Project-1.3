import React, { useState } from "react";
import { TrendData } from "../Trending/TrendData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Trend = () => {
  const [Item, setItem] = useState(TrendData);
  const FilterItem = (cateItem) => {
    const updateItem = TrendData.filter((curItem) => {
      return curItem.category === cateItem;
    });
    setItem(updateItem);
  };
  const [Index, setIndex] = useState(0);
  const nextImage = () => {
    if (Index <= TrendData.length) {
      setIndex(Index.slice(1));
    
    }
    else {
      setIndex(0);
      
    }
  };
  const prevImage = () => {
    if (Index <= 0) {
      setIndex(TrendData.length - 1 );
    } else {
      setIndex(Index - 1);
    }
  };
  return (
    <div className="md:mx-14 my-8 ">
      <div className="grid grid-cols-1 gap-2 py-4 md:py-0 border-b-2 md:flex justify-between items-center ">
        <h1 className="text-xl md:text-3xl">Trending This Week</h1>
        <div className="grid grid-cols-4  transition gap-4 md:h-14 text-sm  md:text-lg">
          <div className="hover:border-b-4  border-red-500">
            <button onClick={() => FilterItem("men")} className="">
              Men
            </button>
          </div>
          <div className="hover:border-b-4 border-red-500">
            <button onClick={() => FilterItem("women")} className="">
              Women
            </button>
          </div>
          <div className="hover:border-b-4 border-red-500">
            <button className="" onClick={() => FilterItem("baby")}>
              Baby
            </button>
          </div>
          <div className="hover:border-b-4 border-red-500">
            <button onClick={() => FilterItem("fashion")}>Fashion</button>
          </div>
        </div>
      </div>
      <div className="  gap-2 mt-8 flex md:gap-10 items-center">
        <button onClick={() => prevImage()}>
          <FaChevronLeft color="gray" className="w-8 h-8" />
        </button>
        {Item?.map((val, i) => {
          console.log(i, Index);
          if (i <= Index) {
            return (
              <div key={i} className="">
                <Link
                  to={{
                    pathname:"/shop",
                    search: `?id=${i}`,
                  }}
                  state={{data:[val] }}
                >
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
          }
        })}
        <button onClick={() => nextImage()}>
          <FaChevronRight color="gray" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Trend;
