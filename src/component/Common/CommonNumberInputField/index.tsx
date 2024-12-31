"use client";

import React from "react";
import { validatorField } from "@/app/lib/utils/utils";
import { CommonNumberInputFieldProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Form from "antd/es/form";
import Space from "antd/es/space";
import InputNumber from "antd/es/input-number";

/**
 * CommonInputField Component
 *
 * A reusable input field component that integrates with Ant Design's Form and Input components.
 *
 * Props:
 * - placeholder: Placeholder text for the input field
 * - label: Label text for the input field
 * - name: Name for the form field
 * - className: Additional CSS class for the input field
 * - maxLength: Maximum length of the input field
 * - showCount: Boolean to show character count
 * - addonBefore: Content to be added before the input
 * - onChange: Event handler for input change
 * - height: Height of the input field
 * - suffix: Suffix content for the input field
 * - rules: Validation rules for the form field
 * - disabled: Boolean to disable the input field
 * - autoFocus: Boolean to autofocus the input field
 * - onKeyDown: Event handler for key down events
 * - reference: Reference for the input field
 * - prefix: Prefix content for the input field
 */

const CommonNumberInputField: React.FC<CommonNumberInputFieldProps> = ({
  placeholder,
  label,
  name,
  className,
  labelClassName,
  maxLength,
  addonBefore,
  onChange,
  height,
  suffix,
  rules,
  disabled,
  autoFocus,
  onKeyDown,
  reference,
  prefix,
}) => {
  // Default validation rules
  const defaultRules = [
    {
      validator: (_: unknown, value: string) => validatorField(_, value, 1, 80),
    },
  ];

  return (
    <Space direction="vertical" className="w-full">
      {/* Display the label using CommonTextField */}
      <CommonTextField
        text={label}
        className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
      />

      <Form.Item
        name={name} // Name of the form field
        rules={rules || defaultRules}
      >
        <InputNumber
          ref={reference} // Reference for the input field
          onKeyDown={onKeyDown} // Key down event handler
          autoFocus={autoFocus} // Autofocus the input field if true
          style={{ height }} // Set the height of the input field
          disabled={disabled} // Disable the input field if true
          addonBefore={addonBefore} // Content to add before the input
          maxLength={maxLength} // Set the maximum length of the input
          className={`${className || ""} custom-text-14 h-8 w-full`} // Additional CSS classes for styling
          placeholder={placeholder} // Placeholder text
          onChange={onChange} // Change event handler
          prefix={prefix} // Prefix content
          suffix={suffix} // Suffix content or default to true
        />
      </Form.Item>
    </Space>
  );
};

export default CommonNumberInputField;
