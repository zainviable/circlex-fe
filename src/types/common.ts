import { FormInstance, FormItemProps, InputRef, RadioChangeEvent } from "antd";
import { SwitchChangeEventHandler } from "antd/es/switch";
import { InputNumberProps } from "antd/lib";
import { ISelectType } from "./station";
import dayjs, { Dayjs } from "dayjs";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { Dispatch, FocusEventHandler, SetStateAction } from "react";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type StatusType = "Active" | "Inactive";
export type YesNoType = "Yes" | "No";
export type ValidatorFieldType = (
  _: any,
  value: string | undefined,
  min?: number,
  max?: number,
  onlyNumber?: boolean,
  isRequired?: boolean
) => Promise<void>;

export type CommonInputFieldProps = {
  placeholder?: string;
  label?: string;
  name: string | (string | number)[];
  labelClassName?: string;
  className?: string;
  maxLength?: number;
  isEmail?: boolean;
  showCount?: boolean;
  addonBefore?: React.ReactNode;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height?: number | string;
  suffix?: React.ReactNode;
  rules?: FormItemProps["rules"];
  disabled?: boolean;
  initialValue?: string | number | boolean;
  autoFocus?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  reference?: React.Ref<InputRef>;
  prefix?: React.ReactNode;
  onlyNumber?: boolean;
  value?: string;
  min?: number;
  max?: number;
  isRequired?: boolean;
  loading?: boolean;
  button?: React.ReactNode | false;
  isFormItem?: boolean;
  addonAfter?: any;
};

export type CommonInputSelectFieldProps = {
  placeholder?: string;
  label?: string;
  name?: string | (string | number)[];
  labelClassName?: string;
  className?: string;
  maxLength?: number;
  showCount?: boolean;
  addonBefore?: React.ReactNode;
  type?: string;
  size?: SizeType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height?: number | string;
  suffix?: React.ReactNode;
  rules?: FormItemProps["rules"];
  disabled?: boolean;
  autoFocus?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  reference?: React.Ref<InputRef>;
  prefix?: React.ReactNode;
  onlyNumber?: boolean;
  value?: string;
  min?: number;
  max?: number;
  isRequired?: boolean;
  loading?: boolean;

  // select field props
  options?: ISelectType[];
  suffixOptions?: ISelectType[];
  selectName?: string | (string | number)[];
  suffixSelectName?: string | (string | number)[];
  selectRules?: FormItemProps["rules"];
  selectPlaceholder?: string;
  suffixSelectPlaceholder?: string;
};

export type CommonTextAreaFieldProps = {
  placeholder?: string;
  label?: string;
  name: string;
  labelClassName?: string;
  className?: string;
  maxLength?: number;
  showCount?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height?: number | string;
  rules?: FormItemProps["rules"];
  disabled?: boolean;
  autoFocus?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  reference?: React.Ref<HTMLTextAreaElement>;
  value?: string;
  min?: number;
  max?: number;
  isRequired?: boolean;
  loading?: boolean;
  rows?: number;
};
export type CommonDateRangePickerProps = {
  label?: string; // Label text for the date range field
  name: string; // Name for the form field
  className?: string; // Additional CSS class for the date range field
  labelClassName?: string; // Additional CSS class for the label
  onChange?: (
    dates: [Dayjs, Dayjs] | null,
    dateStrings: [string, string]
  ) => void; // Event handler for date range change
  rules?: Array<{ validator: (rule: any, value: any) => Promise<void> | void }>; // Validation rules for the form field
  disabled?: boolean; // Boolean to disable the date range field
  value?: [Dayjs, Dayjs] | null; // Initial value for the date range
  placeholder?: string | string[];
  format?: string;
  disablePrevData?: boolean;
  isRequired?: boolean;
  defaultValue?: Dayjs[];
};

export type CommonButtonProps = {
  text: string; // Text to be displayed on the button
  className?: string; // Additional CSS classes for the button
  topClass?: string; // Additional CSS class for the parent div
  width?: string | number; // Width of the button
  height?: string | number; // Height of the button
  background?: string; // Background color of the button
  borderRadius?: string; // Border radius of the button
  border?: string; // Border style of the button
  color?: string; // Text color of the button
  onClick?: (() => void) | Function; // Click event handler
  htmlType?: "button" | "submit" | "reset"; // HTML button type
  disabled?: boolean; // Boolean to disable the button
  type?: "primary" | "default" | "dashed" | "link" | "text"; // Button type
  fontSize?: string; // Font size of the button text
  padding?: string; // Padding of the button
  icon?: React.ReactNode; // Icon to be displayed in the button
  loading?: boolean; // Boolean to show loading spinner
  borderColor?: string; // Border color of the button
  borderStyle?: string; // Border style of the button
  size?: "large" | "middle" | "small"; // Size of the button
  lineHeight?: string; // Line height of the button text
  textClassName?: string;
};

export type CommonDatePickerProps = {
  label?: string; // Label text for the date picker field
  name: string | (string | number)[]; // Name for the form field
  className?: string; // Additional CSS class for the date picker field
  labelClassName?: string; // Additional CSS class for the label
  onChange?: ((date: Dayjs, dateString: string | string[]) => void) | undefined; // Event handler for date change
  rules?: Array<{ validator: (rule: any, value: any) => Promise<void> | void }>; // Validation rules for the form field
  disabled?: boolean; // Boolean to disable the date picker field
  value?: Dayjs | null; // Initial value for the date picker
  loading?: boolean; // Boolean to show loading spinner
  placeholder?: string;
  autoFocus?: boolean;
  isRequired?: boolean;
  format?: string;
  disablePre?: boolean;
};

export type CommonInputSearchFieldProps = {
  placeholder: string;
  className?: string;
  addonBefore?: React.ReactNode;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height?: number | string;
  disabled?: boolean;
  autoFocus?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  reference?: React.Ref<InputRef>;
  onSearch?: () => void;
};

export type CommonTextFieldProps = {
  parentClass?: string;
  text: string;
  children?: React.ReactNode;
  font?: string;
  fontSize?: string | number;
  color?: string;
  mb?: string | number;
  mt?: string | number;
  onClick?: () => void;
  textAlign?: "left" | "center" | "right" | "justify";
  fontWeight?: string | number;
  fontFamily?: string;
  letterSpacing?: string;
  textDecoration?: string;
  paddingLeft?: string | number;
  className?: string;
  title?: string;
  lineHeight?: string | number;
  opacity?: number;
  width?: string | number;
  margin?: string | number;
  paddingTop?: string | number;
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
};

export type CommonNumberInputFieldProps = {
  placeholder?: string;
  label: string;
  name: string;
  labelClassName?: string;
  className?: string;
  maxLength?: number;
  addonBefore?: React.ReactNode;
  onChange?: InputNumberProps["onChange"];
  height?: number | string;
  suffix?: React.ReactNode;
  rules?: FormItemProps["rules"];
  disabled?: boolean;
  autoFocus?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  reference?: React.Ref<HTMLInputElement>;
  prefix?: React.ReactNode;
};

export type CommonSelectProps = {
  size?: SizeType;
  showSearch?: boolean;
  label?: string;
  filterOption?: boolean | ((inputValue: string, option: any) => boolean);
  name: string | (string | number)[];
  labelClassName?: string;
  rules?: FormItemProps["rules"];
  options: ISelectType[];
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  open?: boolean;
  prefix?: React.ReactNode;
  onSelect?: (value: string, option: any) => void;
  mode?: "multiple" | "tags";
  disabled?: boolean;
  onDeselect?: (value: string, option: any) => void;
  testId?: string;
  dropDownRenderChild?: React.ReactNode | undefined;
  optionRender?: ((_: ISelectType) => React.ReactNode) | undefined;
  reference?: React.Ref<HTMLInputElement>;
  isRequired?: boolean;
  onSearch?: (_: string) => void;
  autoFocus?: boolean;
  onChange?: (_: string) => void;
  onBlur?: FocusEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
};

export type CommonMultiSelectProps = {
  showSearch?: boolean;
  label?: string;
  filterOption?: boolean | ((inputValue: string, option: any) => boolean);
  name: string;
  labelClassName?: string;
  rules?: FormItemProps["rules"];
  options: { label: string; value: string }[];
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  prefix?: React.ReactNode;
  form?: FormInstance;
  onSelect?: (value: string, option: any) => void;
  mode?: "multiple" | "tags";
  disabled?: boolean;
  onDeselect?: (_: string, __: any) => void;
  showTags: boolean;
  isRequired?: boolean;
  isFormItem?: boolean;
  value?: string[];
};

export type CommonSwitchProps = {
  label?: string;
  name: string;
  labelClassName?: string;
  disabled?: boolean;
  onChange?: SwitchChangeEventHandler;
  checkedChildren?: string;
  unCheckedChildren?: string;
  value?: boolean | string;
};

export type CommonCheckboxProps = {
  label?: string;
  name: string | (string | number)[];
  labelClassName?: string;
  disabled?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
  checkedChildren?: string;
  unCheckedChildren?: string;
  value?: boolean;
  checked?: boolean;
};

export type CommonRadioGroupProps = {
  label?: string;
  name?: string;
  labelClassName?: string;
  disabled?: boolean;
  onChange?: (_: RadioChangeEvent) => void;
  value?: string | boolean;
  isFormItem?: boolean;
  options: { label: string; value: string }[];
};

export type IOptionTypes = {
  label: string;
  value: string;
};

export type IFilterFields = {
  name: string;
  type: string;
  label: string;
  placeholder: string[] | string;
  options?: IOptionTypes[];
  showSearch?: boolean;
};

export type IFilterList = {
  label: string;
  name: string;
  id: string;
  fieldName: string;
};

export type CommonHeadingProps = {
  text?: string;
  children?: React.ReactNode;
  font?: string;
  fontSize?: string | number;
  color?: string;
  mb?: string | number;
  mt?: string | number;
  onClick?: () => void;
  textAlign?: "left" | "center" | "right";
  fontWeight?: string | number;
  fontFamily?: string;
  letterSpacing?: string | number;
  textDecoration?: string;
  paddingLeft?: string | number;
  paddingTop?: string | number;
  className?: string;
  title?: string;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5;
  width?: string | number;
};

export type CommonModalProps = {
  setIsModalVisible: (_: boolean) => void;
  isModalVisible: boolean;
  children?: React.ReactNode;
  width?: string | number;
  title?: string;
  titleText?: string;
  footer?: React.ReactNode;
  description?: React.ReactNode;
  onConfirm?: () => void;
  loading?: boolean;
  className?: string;
  destroyOnClose?: boolean;
  buttonText?: string;
  cancelBtnText?: string;
  cancelBtn?: boolean;
  closeOnConfirm?: boolean;
  changeRouteOnClose?: () => void;
};

export type CommonAlertModalProps = {
  type: string;
  setIsModalVisible: (_: boolean) => void;
  isModalVisible: boolean;
  children?: React.ReactNode;
  width?: string | number;
  title?: string;
  titleText?: string;
  description?: React.ReactNode;
  onConfirm?: () => void;
  loading?: boolean;
  className?: string;
  destroyOnClose?: boolean;
  content?: string[];
};

export type CommonSuccessModalProps = {
  setIsModalVisible: (_: boolean) => void;
  isModalVisible: boolean;
  children?: React.ReactNode;
  width?: string | number;
  title?: string;
  titleText?: string;
  description?: React.ReactNode;
  onConfirm?: () => void;
  loading?: boolean;
  className?: string;
  destroyOnClose?: boolean;
  content?: string[];
};

export type CommonWarningModalProps = {
  setIsModalVisible: (_: boolean) => void;
  isModalVisible: boolean;
  children?: React.ReactNode;
  width?: string | number;
  title?: string;
  titleText?: string;
  description?: React.ReactNode;
  onConfirm?: () => void;
  loading?: boolean;
  className?: string;
  destroyOnClose?: boolean;
  content?: string[];
};

export type CommonErrorModalProps = {
  setIsModalVisible: (_: boolean) => void;
  isModalVisible: boolean;
  children?: React.ReactNode;
  width?: string | number;
  title?: string;
  titleText?: string;
  description?: React.ReactNode;
  onConfirm?: () => void;
  loading?: boolean;
  className?: string;
  destroyOnClose?: boolean;
  content?: string[] | Error[];
};

export interface ISaveType {
  SAVE: "SAVE";
  SAVE_CLOSE: "SAVE_CLOSE";
  SAVE_ADD_NEW: "SAVE_ADD_NEW";
}

export interface TableData {
  [key: string]: any; // This allows any key of type any value
}

export interface ICommonObjectType {
  [key: string]: ICommonObjectType | string;
}

export type IStatusType = {
  value: string;
  label: string;
};

export type ISaveCloseType = {
  key: string;
  label: string;
};

export type DeviceData = {
  key: string;
  value: string;
};

export type DeleteData = {
  message: string;
};

export type IExchangeRate = {
  currencyId: string;
  currencyName: string;
  currencySymbol: string;
  exChangeRateCurrencyId: string;
  exChangeRateCurrencyName: string;
  exChangeRateCurrencySymbol: string;
  changeValue: number;
};

export interface IEditableColumnType {
  title: string;
  key: string;
  type: "input" | "select" | "checkbox";
  placeholder?: string;
  htmlType?: string;
  isRequired?: boolean;
  editable?: boolean;
  initialValue?: string | number | boolean;
  focus?: boolean;
  text?: string;
  options?: { value: string; label: string }[];
}

export interface IEditableTableProps {
  initialData?: Record<string, any>[];
  columns: IEditableColumnType[];
  showActions?: boolean;
  showAddRow?: boolean;
  tableTtile?: string;
  addButtonText?: string;
  mainFieldName?: string;
  removeRow?: (index: number, record: any) => void;
  setInitialData: Dispatch<SetStateAction<Record<string, any>[]>>;
}

export interface DynamicTableFieldType {
  name: string;
  type: "input" | "number" | "select" | "checkbox" | "multiselect" | "toggle";
  editable: boolean;
  label?: string;
  placeholder?: string;
  options?: DefaultOptionType[];
  onSelect?: (
    value: string,
    mainKey: string,
    rowName: string,
    fieldName: string
  ) => void;
  rules?: [
    {
      required?: boolean;
      message?: string;
    }
  ];
}

export interface DynamicTableColumnsType {
  title: string;
  dataIndex: string;
  key: string;
  width?: number | string;
  align?: string;
  fields?: DynamicTableFieldType[];
  className?: string;
  render?: (text?: any, record?: any, index?: number) => React.ReactNode;
}
