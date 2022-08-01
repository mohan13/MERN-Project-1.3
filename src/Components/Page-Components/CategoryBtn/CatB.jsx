import React from "react";
import { CatData } from "./CategoryData";
// import { selectData,childs } from "../CategoryBtn/CategoryData";
// import {oprtions} from '../CategoryData'
const CatB = () => {
  return (
    <div className="md:px-8 py-4 px-10">
      <div className="flex flex-col gap-4 ">
        <select>
          <option>Category </option>
          <option>Category 1</option>
          <option>Category 1</option>
        </select>
        <select>
          <option>Type 1</option>
          <option>Type 1</option>
          <option>Type 1</option>
        </select>
        <select>
          <option>SIze 1</option>
          <option>Category 1</option>
          <option>Category 1</option>
        </select>
        <select>
          <option>Category 1</option>
          <option>Category 1</option>
          <option>Category 1</option>
        </select>
      </div>
      {CatData?.map((val, i) => {
        return (
          <div key={i} className='md:text-left'>
            <div className="my-4 text-lg font-bold">{val.label}</div>
            <div className="flex gap-4 items-center">
              <input type={val.type} placeholder={val.placeholder}/>
              {val.title}
            </div>
          </div>
        );
      })}
    </div>
   
  );
};

export default CatB;
