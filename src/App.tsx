import React from "react";
import styled from "styled-components";
import { Navbar, Search } from "./components";
import { Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Search />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
