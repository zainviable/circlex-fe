import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import routes from "./Routes.tsx";

const Main = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (location.pathname === "/panel" || location.pathname === "/admin") {
  //       navigate("/");
  //     }
  //   }, [location, navigate]);

  return (
    <div className="main">
      <Routes>
        {routes.map((route, key) => (
          <Route key={key} path={`${route.path}`} element={route.component} />
        ))}
      </Routes>
    </div>
  );
};

export default Main;
