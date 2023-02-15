import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { NewsProvider } from "./context/newsContext";
import { NewsCategoryProvider } from "./context/newsCategoryContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NewsProvider>
      <NewsCategoryProvider>
        <App />
      </NewsCategoryProvider>
    </NewsProvider>
  </React.StrictMode>
);
