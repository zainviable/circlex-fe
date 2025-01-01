"use client";
import React from "react";
import { Input, Button, Checkbox, Form, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import Images from "@/app/lib/Images"; // Assuming your images are stored here

const { Title, Text } = Typography;

function Login() {
  return (
    <div
      className="login-container "
      style={{ display: "flex", minHeight: "100vh" }}
    >
      {/* Left Section: Form */}
      {/* <div className="container"> */}
      <div
        className="form-container"
        style={{
          width: "50%",
          backgroundColor: "#fff",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title
          level={2}
          className="font-urbanist text-3xl font-semibold leading-[36px] text-left"
        >
          Welcome Back to CircleX!
        </Title>{" "}
        <Text
          className="font-urbanist text-[16px] font-normal leading-[19.2px] tracking-[-0.01em] text-left"
          type="secondary"
          style={{ marginBottom: "20px" }}
        >
          Log in to access personalized programs, expert consultations, and
          support tailored to your needs.
        </Text>
        <Form
          layout="vertical"
          name="login"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              placeholder="Phone Number"
              className="bg-[#f2f2f2] hover:bg-[#f2f2f2] px-[14px] py-[12px] rounded-lg border border-gray-300 focus:border-blue-500"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              className="bg-[#f2f2f2] hover:bg-[#f2f2f2] px-[14px] py-[12px] rounded-lg border border-gray-300 focus:border-blue-500"
              style={{ outline: "none" }} // Optional, if you want to remove the default outline
            />
          </Form.Item>
          <div className="flex justify-between items-center">
            <Form.Item>
              <Checkbox className="login-checkbox" name="remember">
                Remember me
              </Checkbox>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Link
                className="text-[rgba(0,145,191,1)] font-bold font-urbanist"
                href="#"
              >
                Forgot Password?
              </Link>
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              className="bg-[rgba(0,145,191,1)] font-urbanist p-[20px] rounded-[30px]"
              type="primary"
              htmlType="submit"
              block
            >
              Login
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Text className="font-urbanist font-bold text-[rgba(30, 41, 59, 1)]">
              Don&apos;t have an account? <Link href="#">Sign Up</Link>
            </Text>
          </Form.Item>
        </Form>
      </div>
      {/* </div> */}

      {/* Right Section: Image and Text */}
      <div
        className="image-container"
        style={{
          width: "50%",
          position: "relative",
        }}
      >
        <Image
          src={Images.loginBanner} // Assuming the image is stored in Images
          alt="Pharmacy Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-8 left-8 text-white  bg-opacity-60 p-4 rounded-lg">
          <Text className="font-urbanist lg:block sm:hidden text-white md-text-sm lg-text-xl italic font-light leading-7 text-left">
            Your Care, Your Way: Tailored support for every step of your
            recovery.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Login;
