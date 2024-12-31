// CommonRadioGroup.tsx

import React from "react";
import { CommonRadioGroupProps } from "@/app/types/common";
import Form from "antd/es/form";
import Radio from "antd/es/radio";
import Space from "antd/es/space";
import CommonTextField from "../CommonTextField";

/**
 * CommonRadioGroup Component
 *
 * A reusable select field component that integrates with Ant Design's Form and Select components.
 *
 * Props:
 * - name: Name for the form field
 */

const CommonRadioGroup: React.FC<CommonRadioGroupProps> = ({
  name,
  label,
  disabled,
  labelClassName,
  value,
  isFormItem = true,
  onChange,
  options = [],
}) => {
  const renderRadio = () => {
    return <Radio.Group options={options} onChange={onChange} value={value} />;
  };
  return (
    <Space>
      {/* Display the label using CommonTextField */}
      {label && (
        <CommonTextField
          text={label}
          className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
        />
      )}

      {isFormItem && (
        <Form.Item name={name} valuePropName="checked">
          {renderRadio()}
        </Form.Item>
      )}

      {!isFormItem && renderRadio()}
    </Space>
  );
};

export default CommonRadioGroup;
