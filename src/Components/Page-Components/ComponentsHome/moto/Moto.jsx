import React from "react";
import { motoData } from "./motoData";
import { Link } from "react-router-dom";
const Moto = () => {
  const handleMouseEnter = () => {
    // e.target.style.bottom = 28
    console.log("");
  };
  return (
    <div className="md:w-full grid grid-cols-1   items-end md:grid-cols-3 p-2 my-4 md:px-10 md:py-4 gap-7 ">
      {motoData?.map((val) => {
        return (
          <div
            className="relative overflow-hidden  transition ease-in-out h-80 "
            style={{
              backgroundImage: `url(${val.Image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor:"rgb(71 85 105)",
            }}
          >
            {/* <img src={val.Image} alt="" className="" /> */}
            <div className="font-sans absolute  duration-300 -bottom-4 hover:bottom-4 inset-x-14 text-white font-bolder">
              <div className="text-3xl mb-4">{val.heading}</div>
              <Link to='/men'><div className="text-sm text-bolder decoration-2 underline underline-offset-4 text-stone-500">
                {val.btn}
              </div></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Moto;
