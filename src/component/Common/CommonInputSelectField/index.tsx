"use client";

import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import { validatorField } from "@/app/lib/utils/utils";
import { CommonInputSelectFieldProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Space from "antd/es/space";
import Select from "antd/es/select";
import Spin from "antd/es/spin";

/**
 * CommonInputSelectField Component
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

const CommonInputSelectField: React.FC<CommonInputSelectFieldProps> = ({
  placeholder = "Type Here",
  label,
  name,
  className,
  labelClassName,
  maxLength,
  showCount,
  type,
  onChange,
  height,
  suffix,
  rules,
  disabled,
  size,
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

  // Select field props
  options = [],
  suffixOptions = [],
  selectName,
  suffixSelectName,
  selectPlaceholder,
  suffixSelectPlaceholder,
}) => {
  // Default validation rules
  const defaultRules = [
    {
      validator: (_: unknown, value: string) =>
        validatorField(_, value, min, max, onlyNumber, isRequired),
    },
  ];

  const renderSelect = () => {
    return (
      <Form.Item
        name={selectName}
        rules={[
          {
            required: isRequired,
            message: "Required",
          },
        ]}
        // noStyle
      >
        <Select
          size={size}
          className={`${className || ""} w-17 ${!size && "h-8"} p-0`}
          placeholder={selectPlaceholder}
          options={options}
          disabled={disabled}
        />
      </Form.Item>
    );
  };

  const suffixRenderSelect = () => {
    return (
      <Form.Item
        name={suffixSelectName}
        rules={[
          {
            required: isRequired,
            message: "Required",
          },
        ]}
        // noStyle
      >
        <Select
          size={size}
          className={`${className || ""} w-17 ${!size && "h-8"} p-0`}
          placeholder={suffixSelectPlaceholder}
          options={suffixOptions}
          disabled={disabled}
        />
      </Form.Item>
    );
  };

  return (
    <Space direction="vertical" className="w-full">
      {/* Display the label using CommonTextField */}
      {label && (
        <Space>
          <CommonTextField
            text={label}
            className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
          />
          {loading && <Spin />}
        </Space>
      )}

      {/* <InputGroup compact> */}
      <Space.Compact className="w-full">
        {selectName && renderSelect()} {/* Render the select field */}
        <Form.Item
          className="flex-1"
          name={name} // Name of the form field
          rules={rules || defaultRules}
          // noStyle
        >
          <Input
            size={size}
            defaultValue={value}
            ref={reference} // Reference for the input field
            onKeyDown={onKeyDown} // Key down event handler
            autoFocus={autoFocus} // Autofocus the input field if true
            style={{ height }} // Set the height of the input field
            type={type} // Input field type (e.g., text, password)
            disabled={disabled} // Disable the input field if true
            showCount={showCount} // Show character count if true
            maxLength={maxLength} // Set the maximum length of the input
            className={`${className || " "} ${selectName ? "" : "rounded-l-md"} common-select ${!size && "h-8"} w-full`} // Additional CSS classes for styling
            placeholder={placeholder} // Placeholder text
            onChange={onChange} // Change event handler
            prefix={prefix} // Prefix content
            suffix={suffix} // Suffix content or default to true
          />
        </Form.Item>
        {suffixSelectName && suffixRenderSelect()}
        {/* Render the select field */}
      </Space.Compact>

      {/* </InputGroup> */}
    </Space>
  );
};

export default CommonInputSelectField;
