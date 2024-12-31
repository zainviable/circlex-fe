"use client";

import React from "react";
import { Form, DatePicker, Space } from "antd";
import CommonTextField from "../CommonTextField";
import { CommonDateRangePickerProps } from "@/app/types/common";
import { DD_MM_YYYY } from "@/app/lib/constant";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";

const CommonDateRangePicker: React.FC<CommonDateRangePickerProps> = ({
  label,
  name,
  className,
  labelClassName,
  rules,
  disabled,
  value,
  placeholder = DD_MM_YYYY,
  format = DD_MM_YYYY,
  disablePrevData,
  isRequired,
  defaultValue,
}) => {
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Disables dates before today
    return current && current < dayjs().startOf("day");
  };

  return (
    <Space direction="vertical" className="w-full">
      {label && (
        <CommonTextField
          text={label}
          className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
        />
      )}

      <Form.Item
        name={name}
        rules={
          rules
            ? rules
            : [{ required: isRequired, message: "Please select a date!" }]
        }
      >
        <DatePicker.RangePicker
          value={value}
          defaultValue={defaultValue || undefined}
          // onChange={onChange}
          disabled={disabled}
          className={`${className || ""} custom-date-range-picker w-full`}
          placeholder={placeholder}
          format={format}
          // Conditionally apply `disabledDate` only when `disablePrevData` is true
          disabledDate={disablePrevData ? disabledDate : undefined}
        />
      </Form.Item>
    </Space>
  );
};

export default CommonDateRangePicker;
