import React from "react";
import Menu from "./Menu/Menu";
import NavBar from "./navBar/navBar";
import Main from "./Main";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <div className="flex items-stretch h-screen overflow-hidden">
          <Menu />
          {/* RightPart */}
          <div className="w-[100%] bg-[#F9FAFB] max-h-[100vh] overflow-y-auto">
            <NavBar />
            <Main />
          </div>
        </div>
      ) : (
        <Main />
      )}
    </>
  );
};

export default Layout;
