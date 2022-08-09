import React from "react";
import Login from "../Page-Components/loginFormComponents.jsx/Login";
import { motion } from "framer-motion";
function loginForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Login />
    </motion.div>
  );
}

export default loginForm;
