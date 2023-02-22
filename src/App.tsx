import React, { useEffect } from "react";
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
} from "../src/pages";
import { useMobileLayoutContext } from "./context/mobileLayoutContext";
import { useMediaQuery } from "react-responsive";

function App() {
  const { isMobile, isSidebarOpen, setIsMobile, closeSidebar } =
    useMobileLayoutContext();

  const mobile = useMediaQuery({ maxWidth: 650 });

  useEffect(() => {
    setIsMobile(mobile);
    closeSidebar();
  }, [mobile]);

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
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
