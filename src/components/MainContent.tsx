import React from "react";
import { Sidebar } from "../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  General,
  Business,
  Health,
  Science,
  Sports,
  Technology,
} from "../pages";

const MainContent = () => {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<General />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainContent;
