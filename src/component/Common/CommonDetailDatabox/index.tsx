import React from "react";
import CommonTextField from "../CommonTextField";
import { ISelectType } from "@/app/types/station";

// Props types
interface Props {
  data: ISelectType[];
}

const CommonDetailDatabox = ({ data }: Props) => {
  return (
    <div className="mb-2.5 flex rounded-lg border bg-[#f4f9fc] px-6 py-2.5">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-1 flex-col text-center ${
            index === 0 ? "pl-0" : "pl-[10px]"
          } ${index === data.length - 1 ? "pr-0" : "border-r pr-[10px]"}`}
        >
          <CommonTextField
            text={item.label}
            fontSize="text-[14px]"
            fontWeight={600}
            color="#1C2B48"
          />
          <CommonTextField
            text={item.value}
            fontSize="text-[11px]"
            color="#8892a2"
          />
        </div>
      ))}
    </div>
  );
};

export default CommonDetailDatabox;
