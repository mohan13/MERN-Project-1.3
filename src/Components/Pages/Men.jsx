import React from "react";
import MenHead from "../Page-Components/MenComponents/MenHead";
import ShopMen from "../Page-Components/MenComponents/ShopMen";
import { motion } from "framer-motion";
const Men = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity:1}}
        transition={{ duration:0.5}}
      >
        <MenHead />
        <ShopMen />
      </motion.div>
    </div>
  );
};

export default Men;
