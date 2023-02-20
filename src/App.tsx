import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  NavbarSmall,
  Search,
  Sidebar,
  Featured,
  Latest,
  SmallSidebar,
} from "../src/components";
import {
  General,
  Business,
  Health,
  Science,
  Sports,
  Technology,
  HomePage,
  Favorites,
  Menu,
} from "../src/pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      <NavbarSmall />
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
          <Route path="favorites" element={<Favorites />} />
          <Route path="featured" element={<Featured />} />
          <Route path="latest" element={<Latest />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
