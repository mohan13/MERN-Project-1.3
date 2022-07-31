import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { NavData } from "../NavData";
import Icon from "../../Ui/icon";
import Logo from "../../Images/mainLogo.webp";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
const Toolbar = () => {
  const [switchToggled, setSwitchToggled] = useState(true);
  // const ToggleSwitch = () => {
  //   setSwitchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
  // };
  return (
    <div className="w-full grid">
      <div className="py-4 flex justify-between px-4 md:px-14 lg:grid grid-cols-4 w-full items-center">
        <div className="w-32 md:w-40  hover:cursor-pointer  ">
          <img src={Logo} alt="" className="w-full" />
        </div>
        <div className=" mx-2 col-span-2 hidden md:flex justify-between font-semibold text-base md:text-md">
          {NavData?.map((val, i) => {
            return (
              <div key={i}>
                <Link
                  to={val.path}
                  className="hidden lg:flex items-center hover:text-red-500"
                >
                  {val.title}
                  {val.icon}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="md:flex hidden justify-evenly">
          <Icon
            Icon1={
              <AiOutlineSearch className="w-full h-full hover:cursor-pointer color-red " />
            }
          />
          <Icon
            Icon1={
              <AiOutlineUser className="  hover:cursor-pointer  w-full h-full" />
            }
          />
          <Icon
            Icon1={
              <AiOutlineShoppingCart className="  hover:cursor-pointer  w-full h-full" />
            }
          />
        </div>
        <div className="lg:hidden ">
          <AiOutlineMenu
            className="w-8 h-8 bg-yello-200"
            onClick={() => setSwitchToggled(!switchToggled)}
          />
        </div>
      </div>
      <div className={switchToggled ? "hidden" : "flex"}>
        <Sidebar/>
      </div>
      <div className="bg-black md:text-md text-white py-3">
        Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer Shop Now
      </div>
    </div>
  );
};

export default Toolbar;
