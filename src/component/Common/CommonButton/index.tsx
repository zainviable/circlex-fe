import { Button } from "antd";
import React from "react";
import { CommonButtonProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  className,
  topClass,
  width,
  height,
  background,
  borderRadius,
  border,
  color,
  onClick,
  htmlType = "submit",
  disabled,
  type = "default",
  fontSize,
  padding,
  icon,
  loading,
  borderColor,
  borderStyle,
  size = "middle",
  lineHeight = "24px",
  textClassName = "",
}) => {
  return (
    <div className={`button-parent ${topClass || ""}`}>
      <Button
        loading={loading}
        icon={icon}
        type={type}
        size={size}
        style={{
          fontSize,
          width,
          height,
          background,
          borderRadius,
          color,
          border,
          borderStyle,
          borderColor,
          padding,
        }}
        className={`${type === "default" ? "bg-light-gradient" : ""} h-8 w-32 min-w-20 ${className}`}
        onClick={onClick}
        htmlType={htmlType}
        disabled={disabled}
      >
        <CommonTextField
          text={text}
          className={`font-medium text-primary-100 ${textClassName}`}
          lineHeight={lineHeight}
        />
      </Button>
    </div>
  );
};

export default CommonButton;
