"use client";

import React from "react";
import { CommonSelectProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Form from "antd/es/form";
import Space from "antd/es/space";
import Select from "antd/es/select";

/**
 * CommonSelect Component
 *
 * A reusable select field component that integrates with Ant Design's Form and Select components.
 *
 * Props:
 * - showSearch: Whether to show the search box
 * - filterOption: Function to filter options
 * - name: Name for the form field
 * - rules: Validation rules for the form field
 * - options: Options for the select field
 * - placeholder: Placeholder text for the select field
 * - defaultValue: Default value of the select field
 * - className: Additional CSS class for the select field
 * - prefix: Prefix content for the select field
 * - form: Form instance
 * - onSelect: Event handler for option select
 * - mode: Mode of the select field (e.g., multiple, tags, none)
 * - disabled: Boolean to disable the select field
 * - onDeselect: Event handler for option deselect
 */
const CommonSelect: React.FC<CommonSelectProps> = ({
  showSearch = true,
  label,
  filterOption,
  name,
  labelClassName,
  size,
  rules,
  options,
  placeholder = "Type here",
  defaultValue,
  className,
  onSelect = () => {},
  onSearch = () => {},
  mode,
  disabled,
  onDeselect,
  testId,
  dropDownRenderChild,
  optionRender,
  reference,
  isRequired = true,
  autoFocus = false,
  onChange = () => {},
}) => {
  const defaultFilterOption = (
    input: string,
    option?: { label?: string | undefined }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Space direction="vertical" className="w-full">
      {/* Display the label using CommonTextField */}
      {label && (
        <CommonTextField
          text={label}
          className={`${labelClassName} ${disabled ? "text-greyish-400" : ""}`}
        />
      )}

      <Form.Item
        name={name}
        rules={
          rules || [
            {
              required: isRequired,
              message: "Field is required.",
            },
          ]
        }
      >
        <Select
          size={size}
          data-testid={testId}
          onDeselect={onDeselect}
          showSearch={showSearch}
          filterOption={filterOption ?? defaultFilterOption}
          defaultValue={defaultValue}
          mode={mode}
          onChange={onChange}
          // onBlur={onBlur}
          onSearch={showSearch ? onSearch : undefined}
          className={`${className || ""} common-select min-h-8 w-full`}
          placeholder={placeholder}
          autoFocus={autoFocus}
          options={options}
          disabled={disabled}
          onSelect={onSelect}
          dropdownRender={(menu) => (
            <>
              {dropDownRenderChild && <>{dropDownRenderChild}</>}
              {menu}
            </>
          )}
          optionRender={optionRender}
          ref={reference || null}
        />
      </Form.Item>
    </Space>
  );
};

export default CommonSelect;
