import React, { useState, useEffect } from "react";
// import axios from "axios";
import Category from "../CategoryBtn/CatB";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineLike,
  AiOutlineZoomIn,
} from "react-icons/ai";
const ShopMen = () => {
  const [switchToggled, setSwitchToggled] = useState(-1);
  const [product, setProuduct] = useState();
  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((response) => response.json())
      
      .then((data) => setProuduct(data.data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-10 md:gap-10 mx-4 md:mx-14">
      <div>
        <Category />
      </div>
      <div className="col-span-3">
        <div className="flex flex-col items-center md:grid grid-cols-4 md:gap-10">
          {(product)?.map((val, i) => {
            console.log(val);
            return (
              <div
                key={i}
                onMouseOver={() => setSwitchToggled(i)}
                onMouseLeave={() => setSwitchToggled(-1)}
                className="relative "
              >
                {/* <img src={val.attributes.Image} alt="" /> */}

                <img
                  src={`
                http://localhost:1337${val.attributes.Image.data.attributes.formats.thumbnail.url}
                `} alt=''
                  class="lg:h-48 md:h-42 w-full object-cover object-center"
                />

                <Link
                  to={{
                    pathname: "/shop",
                    search: `?id=${i}`,
                  }}
                  state={{ data: [val] }}
                >
                  <div>
                    <h1 className="hover:text-red-500">
                      {val.attributes.title}
                    </h1>
                    <p>${val.attributes.price}</p>
                  </div>
                </Link>
                <div
                  className={`absolute z-100 md:inset-x-10 lg:inset-x-8 inset-x-14 bottom-24
                    ${switchToggled === i ? " " : "hidden"}`}
                >
                  <div className="flex bg-white">
                    <Link to='/cart'><AiOutlineShoppingCart className="bg-white hover:bg-red-500 p-4 hover:text-white w-4 h-4 md:w-14 md:h-14" /></Link>
                    <AiOutlineLike className=" bg-white hover:bg-red-500 p-4 hover:text-white w-4 h-4 md:w-14 md:h-14" />
                    <AiOutlineZoomIn className=" bg-white hover:bg-red-500 p-4 hover:text-white w-4 h-4 md:w-14 md:h-14" />
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
