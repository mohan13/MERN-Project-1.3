import React from "react";
import { motion } from "framer-motion";
import Latest from "../../Page-Components/ComponentsHome/Latest/latest";
import Banner from "../../Page-Components/ComponentsHome/Banner";
import Service from "../../Page-Components/ComponentsHome/Service/service";
import Moto from "../../Page-Components/ComponentsHome/moto/Moto";
import Trend from "../../Page-Components/ComponentsHome/Trending/Trend";
import CustomerFeedback from "../../Page-Components/ComponentsHome/CustomerFeedback/CustomerFeedback";
const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        exit={{ x: window.innerHeight, transition: { duration: 0.2 } }}>
        <Banner />

        <Moto />
        <Trend />
        <CustomerFeedback />
        <Trend />
        <Latest />
        <Service />
      </motion.div>
    </div>
  );
};

export default Home;
