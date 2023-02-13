import React from "react";
import { Navbar, Search, MainContent } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <main>
      <Navbar />
      <Search />
      <MainContent />
    </main>
  );
}

export default App;
