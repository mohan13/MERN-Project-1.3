import React from "react";
import { LoginData } from "./loginData";
const Login = () => {
  return (
    <div className="mx-80 px-16 text-left gap-4 border">
      {LoginData.map((val, i) => {
        return (
          <div key={i} className="grid gap-4 mx-4  ">
            <label className=" text font-bold">{val.label}</label>
            <div>
              <input
                className="py-4 pl-4 mr-4  border outline-none text-sm"
                type={val.type}
                placeholder={val.placeholder}
              />
              {val.text}
            </div>
          </div>
        );
      })}
      <div className="flex items-center justify-between">
        <div>Don't have an account? Sign Up here</div>
        <button className="py-4 px-8 bg-red-500" type="submti">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
