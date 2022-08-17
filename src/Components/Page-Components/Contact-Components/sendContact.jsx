import React from "react";
import { ContactData } from "./ContactData";
import { AiOutlineHome, AiOutlineMobile } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export const schema = yup.object().shape({
  msg: yup.string().min(15).max(50).required("Message is blank"),
  email: yup.string().email().required("Email is required"),
  sub: yup.string().required("Subject is required"),

  username: yup.string().required("username is required"),
});
const SendContact = () => {
  return (
    <Formik
      initialValues={{
        msg: "",
        email: "",
        SubmitEvent: "",
        username: "",
      }}
      validationSchema={schema}
      render={({ errors, touched, handleSubmit }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="static grid grid-col-1 gap-1 mx-8 md:mx-32"
          >
            <div className="md:mx-14 text-left flex flex-col ">
              <div className="text-center my-10">
                <h1 className="text-xl md:text-4xl">Contact</h1>
              </div>
              <div className="grid grid-cols-1 gap-4 md:gap-10">
                {ContactData?.map((val, i) => {
                  return (
                    <div key={i} className="grid md:gap-10 text-left">
                      <label className=" text font-lg mt-4">{val.label}</label>
                      <Field
                        className="py-4 pl-4 text-red-400 border outline-none text-sm"
                        type={val.type}
                        placeholder={val.placeholder}
                        name={val.name}
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name={val.name}
                        component={"div"}
                      />
                    </div>
                  );
                })}
                <button className="w-24 my-4 p-4 hover:text-white hover:bg-red-500 outline-none border text-red-500 border-red-500">
                  Send
                </button>
                {/* {
                  address?.map((val,i)=>{
                    return(
                      <div key={i}>
                      </div>
                    )
                  })
                } */}
                <div className="flex gap-4 items-center">
                  <AiOutlineHome className="w-10 h-10" />
                  <div>
                    <div className="text-lg text-black">
                      Buttonwood, California.
                    </div>
                    <div className="text-stone-500">Rosemead, CA 91770</div>
                  </div>
                </div>
                <div className="flex gap-4  items-center">
                  <AiOutlineMobile className="w-10 h-10" />
                  <div>
                    <div className="text-lg text-black">+1 253 565 2365</div>
                    <div className="text-stone-500">Mon to Fri 9am to 6pm</div>
                  </div>
                </div>
                <div className="flex gap-4  items-center">
                  <BsEnvelope className="w-10 h-10" />
                  <div>
                    <div className="text-lg text-black">
                      support@colorlib.com
                    </div>
                    <div className="text-stone-500">
                      Send us your query anytime!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    />
  );
};

export default SendContact;
