import { AutoComplete, Input } from "antd";
import { DefaultOptionType } from "antd/es/select";
import React from "react";

type CommonAutoCompleteProps = {
  onSelect: (_: string, _: any) => void;
  placeholder: string;
  handleSearch: (_: string) => void;
  optionsList: DefaultOptionType[];
  className: string;
  inputRef?: any;
  defaultOpen?: boolean;
  defaultValue?: string; // This is used for default value in the autocomplete field. It's optional. It's needed when we want to open the dropdown by default and set a default value. Default value is an empty string.  // Note: The type for defaultValue is string, but the type for optionsList is DefaultOptionType[] in antd. It seems that DefaultOptionType[] is not a valid type for options in AutoComplete component. It should be a type that matches the options prop
};

const CommonAutoComplete: React.FC<CommonAutoCompleteProps> = ({
  onSelect,
  placeholder,
  handleSearch,
  optionsList,
  className,
  inputRef,
  defaultOpen = false,
  defaultValue = "",
}) => {
  return (
    <>
      <AutoComplete
        onSelect={onSelect}
        onSearch={handleSearch}
        options={optionsList}
        className={`common-search h-8 w-full ${className}`}
        defaultOpen={defaultOpen}
        defaultValue={defaultValue}
      >
        <Input.Search
          className="h-8"
          ref={inputRef}
          placeholder={placeholder}
        />
      </AutoComplete>
    </>
  );
};

export default CommonAutoComplete;
