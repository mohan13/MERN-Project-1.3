import React from "react";
import { motion } from "framer-motion";
import SignUpForm from "../../Page-Components/loginFormComponents/SignUP";
const SignUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <SignUpForm/>
    </motion.div>
  );
};

export default SignUp;
