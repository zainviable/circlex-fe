import Images from "@/app/lib/theme/Images";
import Image from "next/image";
import React from "react";
import CommonTextField from "../CommonTextField";

const CommonGlobalDataSet = ({ content = "" }) => {
  return (
    <div className="bg-greenish-400 border-blueish-200 mb-4 flex gap-2 rounded-xl border p-3">
      <Image
        src={Images.InfoIcon}
        className="h-[18px] w-[18px]"
        alt="info-icon"
      />
      <CommonTextField
        text={
          content ||
          "This screen impacts global dataset, does not belongs to any business"
        }
      />
    </div>
  );
};

export default CommonGlobalDataSet;
