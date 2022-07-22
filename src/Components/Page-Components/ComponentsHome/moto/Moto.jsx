import React from "react";
import { motoData } from "./motoData";
const Moto = () => {
  return (
    <div className="md:w-full  grid grid-cols-1 md:grid-cols-3 p-4 my-4 md:px-14 md:py-6 gap-7 ">
      {motoData?.map((val) => {
        return (
          <div
            className="bg-green-300 h-80 flex justify-center items-end '"
            style={{
              backgroundImage: `url(${val.Image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="font-sans   text-white font-bolder">
              <div className="text-3xl mb-10">{val.heading}</div>
              <div className="text-sm">{val.btn}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Moto;
