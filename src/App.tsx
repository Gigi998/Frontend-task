import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Search, Sidebar } from "../src/components";
import {
  General,
  Business,
  Health,
  Science,
  Sports,
  Technology,
  Error,
  HomePage,
} from "../src/pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      <div className="page-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="general" element={<General />} />
          <Route path="business" element={<Business />} />
          <Route path="health" element={<Health />} />
          <Route path="science" element={<Science />} />
          <Route path="sports" element={<Sports />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
