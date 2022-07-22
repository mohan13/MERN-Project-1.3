import React from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { NavData } from "../NavData";
import Icon from "../../Ui/icon";
import Logo from "../../Images/logo.webp";
const Toolbar = () => {
  return (
    <div className="w-full">
      <div className="w-full py-4 px-14  md:grid grid-cols-4 items-center">
        <div className="mx-auto">
          <img src={Logo} alt="" />
        </div>
        <div className="col-span-2 mx-2 hidden md:flex justify-between font-semibold text-base md:text-md">
          {NavData?.map((val, i) => {
            return (
              <div key={i}>
                <div className="flex items-center">
                  {val.title}
                  {val.icon}
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:flex hidden justify-evenly">
          <Icon
            Icon1={<AiOutlineSearch className="w-full h-full color-red " />}
          />
          <Icon Icon1={<AiOutlineUser className="w-full h-full" />} />
          <Icon Icon1={<AiOutlineShoppingCart className="w-full h-full" />} />
        </div>
      </div>
      <div className="bg-black text-white py-3">
        <p>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer Shop
          Now
        </p>
      </div>
    </div>
  );
};

export default Toolbar;
