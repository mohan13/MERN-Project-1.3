import React from "react";
import { CatData } from "./CategoryData";
// import { selectData,childs } from "../CategoryBtn/CategoryData";
// import {oprtions} from '../CategoryData'
const CatB = () => {
  const options = [
    {
      cat1: "Category",
      cat2: "Category 1",
      cat3: "Category 2",
      cat4: "Category 3",

    },
    {
      cat1: "Type",
      cat2: "Type 1",
      cat3: "Type 2",
      cat4: "Type 3",
    },
    {
      cat1: "Size",
      cat2: "L",
      cat3: "M",
      cat4: "S",

    },
    {
      cat1: "Color",
      cat2: "Orange",
      cat3: "Black",
      cat4: "Whie",
    },
  ];
  return (
    <div className="px-6 md:px-0 py-4">
      {options.map((val,i) => {
        return (
          <div key={i} className='grid grid-cols-1'>
            <select>
              <option>
                {val.cat1}
              </option>
              <option>
                {val.cat2}
              </option>
              <option>
                {val.cat3}
              </option>
              <option>
                {val.cat4}
              </option>
          </select>
          </div>
        );
      })}
      {CatData?.map((val, i) => {
        return (
          <div key={i} className="md:text-left">
            <div className="my-4 text-lg font-bold">{val.label}</div>
            <div className="flex gap-4 items-center">
              <input type={val.type} placeholder={val.placeholder} />
              {val.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatB;
