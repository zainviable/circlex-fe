"use client";

import React from "react";
import { Typography } from "antd";

const { Text, Link } = Typography;

function LoginFooter() {
  return (
    <footer className="bg-[rgba(246,246,247,1)] py-4">
      <div className="mx-auto w-full px-5">
        <div className="flex login-footer justify-between items-center">
          <Text className="text-sm text-black">Copyright 2025 CircleX ©</Text>

          <div className="quick-links flex gap-x-[70px]">
            <Link href="#" className="text-blue-400 hover:text-blue-500">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-400 hover:text-blue-500">
              Contact Us
            </Link>
            <Link href="#" className="text-blue-400 hover:text-blue-500">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LoginFooter;
