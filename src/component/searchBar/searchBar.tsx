"use client";
import images from "../../lib/image";
import { Form, Input } from "antd";

interface SearchBarProps {
  maxWidth?: string;
  responsiveSearchIconRemove?: boolean;
}

function SearchBar({
  maxWidth = "max-w-[400px]",
  responsiveSearchIconRemove = true,
}: SearchBarProps) {
  return (
    <div
      className={`flex items-center gap-2 bg-[#F9FAFB] p-[18px] py-[14px] rounded-[16px] flex-1 w-[100%] ${maxWidth}`}
    >
      <img
        src={images.searchIcon}
        alt="search"
        width={24}
        height={24}
        className={`${
          responsiveSearchIconRemove ? "md:flex hidden" : "flex"
        } w-[24px] h-[24px] min-h-[24px]`}
      />
      <Form
        autoComplete="off"
        className="mb-[0] flex-1 border-none border-[0px] border-color-[transparent]"
      >
        <Form.Item
          name="SearchQuery"
          className="mb-[0] border-none border-[0px] border-color-[transparent]"
        >
          <Input
            style={{ boxShadow: "none" }}
            placeholder="Search here..."
            className="bg-transparent border-none border-[0px] border-transparent p-[0] focus:border-none focus:bg-[transparent] focus:outline-[0px] focus:border-[0px] focus:border-transparent focus:shadow-transparent hover:bg-[transparent]"
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default SearchBar;
