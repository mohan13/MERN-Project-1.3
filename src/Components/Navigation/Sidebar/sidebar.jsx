import React from "react";
import { NavData } from "../NavData";
import { Link } from "react-router-dom";
const Toolbar = () => {

  return (
    <div className="flex justify-between w-full">
      {NavData?.map((val, i) => {
        return (
          <div key={i} className='font-semibold py-4 hover:text-red-500 flex items-center text-base  '>
            <Link to={val.path} className='flex items-center' >
              {val.title}
              {val.icon}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Toolbar;
