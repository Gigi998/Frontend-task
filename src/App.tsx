import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Search, Sidebar, Menu } from "../src/components";
import {
  General,
  Business,
  Health,
  Science,
  Sport,
  Technology,
  HomePage,
  Favorites,
  Error,
} from "../src/pages";
import { useMobileLayoutContext } from "./context/mobileLayoutContext";

function App() {
  const { isMobile, isSidebarOpen } = useMobileLayoutContext();

  return (
    <BrowserRouter>
      {isSidebarOpen ? (
        <Menu />
      ) : (
        <>
          <Navbar />
          <Search />
          <div className="page-content">
            {!isMobile && <Sidebar />}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="general" element={<General />} />
              <Route path="business" element={<Business />} />
              <Route path="health" element={<Health />} />
              <Route path="science" element={<Science />} />
              <Route path="sport" element={<Sport />} />
              <Route path="technology" element={<Technology />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
