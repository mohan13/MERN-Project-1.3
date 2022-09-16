import React from "react";
import { CatData } from "./CategoryData";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export const schema = yup.object().shape({
  cod: yup.string().required("working"),
});
const CatB = () => {

  return (
    <div className="px-6 md:px-0 py-4">
      <div className="flex flex-col">
        <select className="w-40 outline-none border">
          <option>Colors</option>
          <option >Men</option>
          <option>Womnen</option>
          <option>Baby</option>
          <option>Accessories</option>

        </select>
        <select className="w-40 outline-none border">
          <option>Size</option>
          <option>M</option>
          <option>S</option>
          <option>L</option>
        </select>
        <select className="w-40 outline-none border">
          <option>Brand</option>
          <option>Shangreela</option>
          <option>Levi's</option>
          <option>H & M</option>
        </select>
      </div>
      <Formik
        initialValues={{
          cod: "",
        }}
        validationSchema={{ schema }}
        render={({ errors, touched, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {CatData?.map((val, i) => {
                return (
                  <div key={i} className="md:text-left">
                    <div className="my-4 text-lg font-bold">{val.label}</div>
                    <div className="flex gap-4 items-center">
                      {/* <div className="w-4 h-4 rounded-full bg-red-300"> */}
                      <Field
                        type="checkbox"
                        name={val.name}
                        placeholder={val.placeholder}
                        className="outline-none h-4 w-4 "
                        color="red"
                      />
                      {/* </div> */}
                      {val.title}
                      <ErrorMessage name={val.name} component={"div"} />
                    </div>
                  </div>
                );
              })}
            </Form>
          );
        }}
      />
    </div>
  );
};

export default CatB;
