import React from "react";
import { Link } from "react-router-dom";
import { SignUpData } from "./loginData";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export const schema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email address format").required("Email is required"),
  password: yup
    .string().min(8).max(32)
    .required("password is required"),
});
const Login = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={schema}
      render={({ errors, touched, handleSubmit }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="static grid grid-col-1 gap-1"
          >
            <div className="mx-14   text-left flex flex-col ">
              <div className="text-center my-10">
                <h1 className="text-4xl">Sign Up</h1>
                <p className="my-8">Create your account to get full access</p>
              </div>
              <div className="grid grid-cols-1 gap-10">
                {SignUpData?.map((val, i) => {
                  return (
                    <div key={i} className="grid gap-10 text-left   ">
                      <label className=" text font-lg mt-4">{val.label}</label>
                      <Field
                        className="py-4 pl-4   border outline-none text-sm"
                        type={val.type}
                        placeholder={val.placeholder}
                        name={val.name}
                      />
                      <ErrorMessage className="text-red-500" name={val.name} component={"div"} />
                    </div>
                  );
                })}
                <div className="grid gap-4 md:flex justify-between">
                  <div>
                    <input type="check" />
                    <h2>Keep Me Logged In</h2>
                  </div>
                  <Link to="#" className="text-red-500">
                    forgot your password ?
                  </Link>
                </div>
                <div className="grid gap-4 md:flex justify-between">
                  <h2 className="flex">
                    Don’t have an account?{" "}
                    <Link to="/form1" className="md:mx-2 text-red-500">
                     Login
                    </Link>
                    here
                  </h2>
                  <button className="py-4 px-8 bg-red-500" type="submti">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    />
  );
};

export default Login;
