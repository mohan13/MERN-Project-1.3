import React, { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
const CstmSwtch = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();
  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);
  TopBarProgress.config({
    barThickness: 2,
    barColors: {
      "1.0": "#00f",
    },
  });
  return (
    <div>
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </div>
  );
};

export default CstmSwtch;
