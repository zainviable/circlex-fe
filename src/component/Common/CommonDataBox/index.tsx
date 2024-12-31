import React from "react";

// type props
interface Props {
  label: string;
  value: string | number;
  className?: string;
  labelFontSize?: string;
  valueFontSize?: string;
}

const CommonDataBox = ({
  label,
  value,
  labelFontSize = "text-[14px]",
  valueFontSize = "sm:text-[20px] text-[16px]",
  className,
}: Props) => {
  return (
    <div
      className={`${className} flex h-full flex-col justify-center rounded-md border border-[#2780CB] bg-[#2780CB1A] px-1 py-[15px] text-center`}
    >
      <p className={`font-medium text-[#1C2B48] ${labelFontSize}`}>{label}</p>
      <span className={`font-semibold text-[#257ECA] ${valueFontSize}`}>
        {value}
      </span>
    </div>
  );
};

export default CommonDataBox;
