import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { NewsCategoryProvider } from "./context/newsCategoryContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NewsCategoryProvider>
      <App />
    </NewsCategoryProvider>
  </React.StrictMode>
);
