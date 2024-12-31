import CommonTextField from "@/app/components/Common/CommonTextField";
import { TableData } from "@/app/types/common";
import { Table } from "antd";
import React from "react";

type Props = {
  data: TableData[];
  columns: TableData[];
  heading: string;
  subHeading: string;
  isLoading?: boolean;
  suffix?: React.ReactNode;
  className?: string;
  striped?: boolean;
  yScroll?: string | number;
  details?: React.ReactNode | { key: string | number; value: string | number }[];
  detailHeading?: string;
};

const CommonSmallTable = ({
  data,
  columns,
  heading = "",
  subHeading = "",
  isLoading = false,
  striped = true,
  suffix,
  yScroll = 300,
  className,
  details,
  detailHeading = "",
}: Props) => {
  const rowClassName = (record: any, index: number) => {
    if (record?.age > 40) {
      return "row-40"; // Class for rows where age > 40
    }
    if (record?.age < 30) {
      return "row-young"; // Class for rows where age < 30
    }
    if (striped) {
      return index % 2 === 0 ? "bg-[#f8f8f8]" : "bg-white";
    }
    return "";
  };

  return (
    <div className="overflow-hidden rounded-[11px] border-[1px] border-greyish-100">
      <Table
        title={() => (
          <div className="flex items-center justify-between gap-2">
            <div className="px-[17px]">
              <CommonTextField
                className="font-semibold text-black1"
                fontSize="custom-text-18"
                text={heading}
              />
              <CommonTextField
                opacity={0.5}
                text={subHeading}
                className="text-black1"
                fontSize={"custom-text-12"}
              />
            </div>
            {suffix && suffix}
          </div>
        )}
        dataSource={data}
        rowClassName={rowClassName} // Apply rowClassName function to add class based on data
        columns={columns}
        scroll={{ x: "max-content", y: yScroll }}
        className={`small-table ${className}`}
        size="small"
        loading={isLoading}
        pagination={false}
      />
      {Array.isArray(details) && details.length > 0 ? (
        <div className="mt-[13px] border-t px-[25px] py-[13px]">
          {detailHeading && (
            <CommonTextField
              className="mb-3 font-medium text-black1"
              fontSize="text-base"
              text={detailHeading}
            />
          )}
          {details.map((detail, index) => (
            <div
              key={index}
              className="mb-2 flex items-center justify-between gap-2"
            >
              <span className="text-sm font-medium text-[#8d95a3]">
                {detail.key}
              </span>
              <span className="text-sm font-medium text-[#8d95a3]">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <>{details}</> // Render details directly if not an array
      )}
    </div>
  );
};

export default CommonSmallTable;
