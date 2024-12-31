// CommonCheckbox.tsx

import React from "react";
import { CommonCheckboxProps } from "@/app/types/common";
import Form from "antd/es/form";
import { Space } from "antd";
import CommonTextField from "../CommonTextField";
import Checkbox from "antd/es/checkbox";

/**
 * CommonCheckbox Component
 *
 * A reusable select field component that integrates with Ant Design's Form and Select components.
 *
 * Props:
 * - name: Name for the form field
 */

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({
  name,
  label,
  disabled,
  onChange,
  labelClassName,
  checked,
  value,
}) => {
  return (
    <Space>
      <Form.Item name={name} valuePropName="checked">
        <Checkbox
          disabled={disabled}
          onChange={onChange}
          // checkedChildren={checkedChildren}
          // unCheckedChildren={unCheckedChildren}
          checked={checked || false}
          className="common-switch"
          value={value}
        >
          {/* Display the label using CommonTextField */}
          {label && (
            <CommonTextField
              text={label}
              className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
            />
          )}
        </Checkbox>
      </Form.Item>
    </Space>
  );
};

export default CommonCheckbox;
