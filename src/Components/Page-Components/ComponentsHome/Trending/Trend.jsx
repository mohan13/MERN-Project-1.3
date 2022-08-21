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
  const [Start, setStart] = useState(0);
  const [End, setEnd] = useState(3);
  const nextImage = () => {
    if (End === TrendData.length) {
      setEnd(End);
    } else {
      setEnd(End + 1);
      setStart(End - 2);
    }
  };
  const prevImage = () => {
    if (Start === 0) {
      setStart(0);
      setEnd(3);
    } else {
      let Value = 1;
      setStart(Start - Value);
      setEnd(End - Value);
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
      <div className=" justify-center gap-2 mt-8 flex md:gap-10 items-center">
        <button onClick={() => prevImage()}>
          <FaChevronLeft color="gray" className="w-8 h-8" />
        </button>
        {Item?.map((val, i) => {
          if (i >= Start && i < End) {
            return (
              <div key={i} className="">
                <Link
                  to={{
                    pathname: "/shop",
                    search: `?id=${i}`,
                  }}
                  state={{ data: [val] }}
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
