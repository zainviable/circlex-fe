// CommonSwitch.tsx

import React from "react";
import { CommonSwitchProps } from "@/app/types/common";
import Form from "antd/es/form";
import Switch from "antd/es/switch";
import { Space } from "antd";
import CommonTextField from "../CommonTextField";

/**
 * CommonSwitch Component
 *
 * A reusable select field component that integrates with Ant Design's Form and Select components.
 *
 * Props:
 * - name: Name for the form field
 */

const CommonSwitch: React.FC<CommonSwitchProps> = ({
  name,
  label,
  disabled,
  onChange,
  labelClassName,
  checkedChildren,
  unCheckedChildren,
  value,
  checked,
}) => {
  return (
    <Space>
      {/* Display the label using CommonTextField */}
      {label && (
        <CommonTextField
          text={label}
          className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
        />
      )}
      <Form.Item name={name} valuePropName="checked">
        <Switch
          onChange={onChange}
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
          className="common-switch"
          value={value}
          checked={checked}
        />
      </Form.Item>
    </Space>
  );
};

export default CommonSwitch;
