import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./views/partials/Home";
import Header from "./views/partials/Header";
import Footer from "./views/partials/Footer";
import StickyContactBar from "./views/partials/StickyContactBar";
import EntryModal from "./views/partials/entryModal";
function MainContent() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="App">
      <>
        <EntryModal />
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
        <StickyContactBar currentPath={currentPath} />
        <Footer currentPath={currentPath} />
      </>
    </div>
  );
}
export default MainContent;
