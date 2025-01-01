import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import reportWebVitals from "./reportWebVitals";

import Menu from "../src/component/Menu/Menu";
import NavBar from "../src/component/navBar/navBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* LeftPart */}
    <div className="flex items-stretch h-screen">
      <Menu />
      {/* RightPart */}
      <div className="w-[100%] bg-[#F9FAFB] max-h-[100vh] overflow-y-auto">
        <NavBar />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
