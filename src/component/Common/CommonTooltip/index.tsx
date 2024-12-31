import React from "react";
import { Tooltip } from "antd";

// Props type
interface Props {
  title: string;
  placement?: "top" | "bottom" | "left" | "right";
  color?: string;
  textColor?: string; // New prop for text color
  trigger?: "hover" | "click" | "focus";
  children: React.ReactNode;
}

const CommonTooltip = ({
  title,
  placement = "bottom",
  color = "#d9ebf9",
  textColor = "#4299e2", // Default text color
  trigger = "hover",
  children,
}: Props) => {
  return (
    <Tooltip
      title={<span style={{ color: textColor }}>{title}</span>} // Apply text color
      color={color}
      placement={placement}
      trigger={trigger}
    >
      {children}
    </Tooltip>
  );
};

export default CommonTooltip;
