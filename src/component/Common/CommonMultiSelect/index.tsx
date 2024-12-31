"use client";

import React from "react";
import { CommonMultiSelectProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Select from "antd/es/select";
import Space from "antd/es/space";
import Form from "antd/es/form";

/**
 * CommonMultiSelect Component
 *
 * A reusable select field component that integrates with Ant Design's Form and Select components.
 *
 * Props:
 * - showSearch: Whether to show the search box
 * - label: Label text for the select field
 * - filterOption: Function to filter options
 * - name: Name for the form field
 * - labelClassName: Additional CSS class for the label
 * - rules: Validation rules for the form field
 * - options: Options for the select field
 * - placeholder: Placeholder text for the select field
 * - defaultValue: Default value of the select field
 * - className: Additional CSS class for the select field
 * - prefix: Prefix content for the select field
 * - form: Form instance
 * - onSelect: Event handler for option select
 * - mode: Mode of the select field (e.g., multiple, tags)
 * - disabled: Boolean to disable the select field
 * - onDeselect: Event handler for option deselect
 */
const CommonMultiSelect: React.FC<CommonMultiSelectProps> = ({
  showSearch = true,
  label,
  filterOption,
  name,
  labelClassName,
  rules,
  options,
  placeholder = "Type here",
  defaultValue,
  className,
  onSelect = () => {},
  mode = "multiple",
  disabled,
  showTags = true,
  onDeselect,
  isFormItem = true,
  value = [],
}) => {
  // Function to handle removing an item from the selected values
  // const handleRemove = (value: string, form: any) => {
  //   // Retrieve the current values of the form field identified by 'name'
  //   const currentValues = form.getFieldValue(name) || [];

  //   // Filter out the value to be removed from the current values
  //   const updatedValues = currentValues.filter(
  //     (item: string) => item !== value
  //   );

  //   // Update the form field with the new set of values after removal
  //   form.setFieldValue(name, updatedValues);

  //   // If an onDeselect callback is provided, call it with the removed value and updated values
  //   if (onDeselect) {
  //     onDeselect(value, updatedValues);
  //   }
  // };

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
          rules ?? [
            {
              required: true,
              message: "Field is required.",
            },
          ]
        }
        style={{ width: "100%" }}
      >
        <Select
          onDeselect={onDeselect}
          showSearch={showSearch}
          filterOption={filterOption ?? defaultFilterOption}
          defaultValue={defaultValue}
          mode={mode}
          className={
            className || "custom-text-14 common-multi-select min-h-8 w-full"
          }
          placeholder={placeholder}
          options={options}
          disabled={disabled}
          onSelect={onSelect}
          // tagRender={({ label }) => (
          //   <span className="">{showTags ? label : ""}</span>
          // )}
        />
      </Form.Item>

      {!isFormItem && !showTags && (
        <div className="flex flex-wrap gap-2">
          {value.length > 0 &&
            value.map((item, index: number) => (
              <div
                className="flex items-center rounded border border-greenish-100 bg-greenish-300 px-2 py-0.5"
                key={index}
              >
                <CommonTextField
                  text={item}
                  className="capitalize text-greenish-200"
                />
              </div>
            ))}
        </div>
      )}
    </Space>
  );
};

export default CommonMultiSelect;
