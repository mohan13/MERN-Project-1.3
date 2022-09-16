import * as yup from "yup";
export const schema = yup.object().shape({
    fullname: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: yup.string().min(8).max(32).required("password is required"),
    ConfirmPassword: yup
      .string()
      .required("Password is required")
      .oneOf([yup.ref("password"), null], "Password doesn't match"),
  });