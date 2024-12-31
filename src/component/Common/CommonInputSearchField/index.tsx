"use client";

import React from "react";
import Input from "antd/es/input";
import { CommonInputSearchFieldProps } from "@/app/types/common";
import { Space } from "antd";

/**
 * CommonInputField Component
 *
 * A reusable input field component that integrates with Ant Design's Form and Input components.
 *
 * Props:
 * - placeholder: Placeholder text for the input field
 * - className: Additional CSS class for the input field
 * - addonBefore: Content to be added before the input
 * - type: Type of the input field (e.g., text, password)
 * - onChange: Event handler for input change
 * - height: Height of the input field
 * - disabled: Boolean to disable the input field
 * - autoFocus: Boolean to autofocus the input field
 * - onKeyDown: Event handler for key down events
 * - reference: Reference for the input field
 */

const { Search } = Input;

const CommonInputSearchField: React.FC<CommonInputSearchFieldProps> = ({
  placeholder,
  className,
  addonBefore,
  type,
  value,
  onChange,
  height,
  disabled,
  autoFocus,
  onKeyDown,
  reference,
  onSearch,
}) => {
  return (
    <Space direction="vertical" className="w-full">
      <Search
        ref={reference} // Reference for the input field
        value={value}
        onKeyDown={onKeyDown} // Key down event handler
        autoFocus={autoFocus} // Autofocus the input field if true
        style={{ height }} // Set the height of the input field
        type={type} // Input field type (e.g., text, password)
        disabled={disabled} // Disable the input field if true
        addonBefore={addonBefore} // Content to add before the input
        className={`${className || "h-8"} common-search w-full text-xs sm:text-sm`} // Additional CSS classes for styling
        placeholder={placeholder} // Placeholder text
        onChange={onChange} // Change event handler
        size={"middle"}
        onSearch={onSearch}
      />
    </Space>
  );
};

export default CommonInputSearchField;
