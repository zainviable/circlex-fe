"use client";

import React from "react";
import { Form, DatePicker, Space, Spin } from "antd";
import CommonTextField from "../CommonTextField";
import { CommonDatePickerProps } from "@/app/types/common";
import dayjs from "dayjs";
import { DD_MM_YYYY } from "@/app/lib/constant";

/**
 * CommonDatePicker Component
 *
 * A reusable date picker component that integrates with Ant Design's Form and DatePicker components.
 *
 * Props:
 * - label: Label text for the date picker field
 * - name: Name for the form field
 * - className: Additional CSS class for the date picker field
 * - onChange: Event handler for date change
 * - rules: Validation rules for the form field
 * - disabled: Boolean to disable the date picker field
 * - value: Initial value for the date picker
 * - loading: Boolean to show loading spinner
 */

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
  label,
  name,
  className,
  labelClassName,
  onChange,
  rules,
  disabled,
  value,
  loading = false,
  placeholder = DD_MM_YYYY,
  autoFocus = false,
  isRequired = true,
  disablePre = false,
  format = DD_MM_YYYY,
}) => {
  const disablePreviousDates = (current: any) => {
    return current && current < dayjs().startOf("day"); // Disables all dates before today
  };
  return (
    <Space direction="vertical" className="w-full">
      {/* Display the label using CommonTextField */}
      {label && (
        <CommonTextField
          text={label}
          className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
        />
      )}
      {loading && <Spin />}

      <Form.Item
        name={name} // Name of the form field
        rules={
          rules || [
            {
              required: isRequired,
              message: "Field is required.",
            },
          ]
        } // Validation rules
      >
        <DatePicker
          value={value} // Initial value for the date picker
          onChange={onChange} // Change event handler
          disabled={disabled} // Disable the date picker if true
          className={`${className || ""} custom-date-picker w-full`} // Additional CSS classes for styling
          placeholder={placeholder} // Placeholder text for the date picker
          autoFocus={autoFocus}
          format={{
            format: format,
            type: "mask",
          }}
          disabledDate={disablePre ? disablePreviousDates : undefined} // Disable previous dates
        />
      </Form.Item>
    </Space>
  );
};

export default CommonDatePicker;
