import React from "react";
import { Tabs } from "antd";
import CommonSmallTable from "../CommonSmallTable";

interface CommonTableTabsProps {
  tabs: Array<{
    key: string;
    label: string;
    className?: string;
    data: any[];
    columns: any[];
    heading: string;
    suffix: React.ReactNode;
    subHeading: string;
    isLoading?: boolean;
  }>;
  className?: string;
}

const CommonTableTabs = ({ tabs, className }: CommonTableTabsProps) => {
  return (
    <Tabs
      className={`${className} table_tabs`}
      type="card"
      items={tabs.map((tab) => ({
        key: tab.key,
        label: tab.label,
        className: tab.className,
        children: (
          <CommonSmallTable
            data={tab.data}
            columns={tab.columns}
            heading={tab.heading}
            suffix={tab.suffix}
            subHeading={tab.subHeading}
            isLoading={tab.isLoading}
            className={tab.data?.length < 1 && "no-data-table"}
          />
        ),
      }))}
    />
  );
};

export default CommonTableTabs;
