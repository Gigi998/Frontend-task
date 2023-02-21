import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { NewsCategoryProvider } from "./context/newsCategoryContext";
import { MobileLayoutProvider } from "./context/mobileLayoutContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MobileLayoutProvider>
      <NewsCategoryProvider>
        <App />
      </NewsCategoryProvider>
    </MobileLayoutProvider>
  </React.StrictMode>
);
