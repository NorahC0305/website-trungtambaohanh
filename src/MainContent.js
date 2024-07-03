import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./views/partials/Home";
import Header from "./views/partials/Header";
import Footer from "./views/partials/Footer";
function MainContent() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="App">
      <>
        <Header currentPath={currentPath} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Home />} />

            {/* <Route path="/admin/*" element={<Admin />} />
            <Route path="/transaction-history" element={<Transaction />} />
            <Route path="/reset" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
        <Footer currentPath={currentPath} />
      </>
    </div>
  );
}
export default MainContent;
