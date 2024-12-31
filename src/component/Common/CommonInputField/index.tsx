"use client";

import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import CommonTextField from "../CommonTextField";
import Space from "antd/es/space";
import { Spin } from "antd";
import { validatorField } from "@/lib/utils/utils";
import { CommonInputFieldProps } from "@/types/common";

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
 * - type: Type of the input field (e.g., text, password)
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

const CommonInputField: React.FC<CommonInputFieldProps> = ({
  placeholder = "Type Here",
  label,
  name,
  className,
  labelClassName,
  maxLength,
  showCount,
  addonBefore,
  type,
  onChange,
  height,
  isEmail = false,
  suffix,
  rules,
  disabled,
  autoFocus,
  onKeyDown,
  reference,
  prefix,
  onlyNumber = false,
  value,
  min = 1,
  max = 80,
  isRequired = true,
  loading = false,
  button = false,
  isFormItem = true,
  addonAfter = "",
  initialValue = "",
}) => {
  const emailValidator = (_: any, value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!value || emailRegex.test(value)) {
      return Promise.resolve(); // Valid email
    }
    return Promise.reject(new Error("Please enter a valid email address.")); // Invalid email
  };
  // Default validation rules
  const defaultRules = [
    {
      validator: (_: unknown, value: string) =>
        validatorField(_, value, min, max, onlyNumber, isRequired),
    },
    ...(isEmail
      ? [
          {
            validator: emailValidator, // Add email validator if isEmail is true
          },
        ]
      : []),
  ];

  const renderInput = () => {
    return (
      <Input
        defaultValue={value}
        ref={reference} // Reference for the input field
        onKeyDown={onKeyDown} // Key down event handler
        autoFocus={autoFocus} // Autofocus the input field if true
        style={{ height }} // Set the height of the input field
        type={type} // Input field type (e.g., text, password)
        disabled={disabled} // Disable the input field if true
        addonBefore={addonBefore} // Content to add before the input
        showCount={showCount} // Show character count if true
        maxLength={maxLength} // Set the maximum length of the input
        className={`${className || " "} custom-text-14 h-8 w-full`} // Additional CSS classes for styling
        placeholder={placeholder} // Placeholder text
        onChange={onChange} // Change event handler
        prefix={prefix} // Prefix content
        suffix={suffix} // Suffix content or default to true
        addonAfter={addonAfter}
      />
    );
  };

  return (
    <Space direction="vertical" className="w-full">
      {/* Display the label using CommonTextField */}
      {label && (
        <Space className="w-full justify-between">
          <CommonTextField
            text={label}
            className={`${labelClassName} ${
              disabled ? "text-greyish-400" : ""
            }`}
          />
          {loading && <Spin />}
          {button && button}
        </Space>
      )}

      {isFormItem && (
        <Form.Item
          name={name} // Name of the form field
          rules={rules || defaultRules}
          initialValue={initialValue}
        >
          {renderInput()}
        </Form.Item>
      )}

      {!isFormItem && renderInput()}
    </Space>
  );
};

export default CommonInputField;
