import React from "react";
import LoginHeader from "../component/login/login-header";
import LoginFooter from "../component/login/login-footer";
import Login from "../component/login/login-form";

const LoginPage = () => {
  return (
    <div className="mt-[120px] px-[20px]">
      <LoginHeader />
      <Login />
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
