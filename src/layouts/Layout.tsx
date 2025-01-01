import React from "react";
import Menu from "./Menu/Menu";
import NavBar from "./navBar/navBar";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="flex items-stretch h-screen">
      <Menu />
      {/* RightPart */}
      <div className="w-[100%] bg-[#F9FAFB] max-h-[100vh] overflow-y-auto">
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
