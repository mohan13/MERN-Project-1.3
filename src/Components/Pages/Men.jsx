import React from "react";
import MenHead from "../Page-Components/MenComponents/MenHead";
import ShopMen from "../Page-Components/MenComponents/ShopMen";
import { motion } from "framer-motion";
const Men = () => {
  return (
    <div>
      <motion.div
       initial={{ width: 0 }}
       animate={{ width: "100%" }}
       exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}

      >
        <MenHead />
        <ShopMen />
      </motion.div>
    </div>
  );
};

export default Men;
