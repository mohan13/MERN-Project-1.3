import React from "react";
import { FooterData } from "../Footer/FirstFooter";
import Icon from "../../Ui/icon";

const Footer = () => {
  return (
    <div className="mt-10">
      {FooterData?.map((val) => {
        return (
          <div className="bg-black text-left gap-4 p-4 grid grid-cols-1 md:flex md:justify-evenly items-center">
            <div className="text-white leading-loose">
              <div className="text-xl md:text-3xl">{val.heading}</div>
              <p className="text-sm my-4 md:text-xl">{val.subHeading}</p>
            </div>
            <input
              className="outline-none py-4 pl-4 text-black"
              type="email"
              placeholder="Enter your email"/>
              <button type="submit" className="bg-red-500 p-4 text-white font-bolder">Subscribe</button>
            <div className="flex md:items-left justify-evenly">
              <Icon Icon1={val.fb}/>
              <Icon Icon1={val.insta} />
              <Icon Icon1={val.yt} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
