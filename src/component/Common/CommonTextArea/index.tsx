"use client";

import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import { validatorField } from "@/app/lib/utils/utils";
import {
  CommonTextAreaFieldProps,
} from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Space from "antd/es/space";
import { Spin } from "antd";

/**
 * CommonTextAreaField Component
 *
 * A reusable text area component that integrates with Ant Design's Form and Input.TextArea components.
 *
 * Props:
 * - placeholder: Placeholder text for the text area
 * - label: Label text for the text area
 * - name: Name for the form field
 * - className: Additional CSS class for the text area
 * - maxLength: Maximum length of the text area
 * - showCount: Boolean to show character count
 * - onChange: Event handler for text area change
 * - height: Height of the text area
 * - rules: Validation rules for the form field
 * - disabled: Boolean to disable the text area
 * - autoFocus: Boolean to autofocus the text area
 * - onKeyDown: Event handler for key down events
 * - reference: Reference for the text area
 * - value: Initial value for the text area
 */

const CommonTextAreaField: React.FC<CommonTextAreaFieldProps> = ({
  placeholder,
  label,
  name,
  className,
  labelClassName,
  maxLength,
  showCount,
  onChange,
  height,
  rules,
  disabled,
  autoFocus,
  onKeyDown,
  reference,
  value,
  min = 1,
  max = 80,
  isRequired = true,
  loading = false,
  rows = 8,
}) => {
  // Default validation rules
  const defaultRules = [
    {
      validator: (_: unknown, value: string) =>
        validatorField(_, value, min, max, false, isRequired),
    },
  ];

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

      <Form.Item
        name={name} // Name of the form field
        rules={rules || defaultRules}
      >
        <Input.TextArea
          rows={rows}
          defaultValue={value}
          ref={reference} // Reference for the text area
          onKeyDown={onKeyDown} // Key down event handler
          autoFocus={autoFocus} // Autofocus the text area if true
          style={{ height }} // Set the height of the text area
          disabled={disabled} // Disable the text area if true
          showCount={showCount} // Show character count if true
          maxLength={maxLength} // Set the maximum length of the text area
          className={`${className || " "} custom-text-14 w-full`} // Additional CSS classes for styling
          placeholder={placeholder} // Placeholder text
          onChange={onChange} // Change event handler
        />
      </Form.Item>
    </Space>
  );
};

export default CommonTextAreaField;
