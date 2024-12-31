import { Tabs } from "antd";
import React from "react";
import EditableTable from "../../CommonEditableTable";
import CommonButton from "../CommonButton";
import { IRatingTab } from "@/app/types/qualityTesting";

// Props type
interface Props {
  columns: any[];
  tabsItems: IRatingTab[];
  activeKey: string;
  setActiveKey: Function;
  addNewTab: Function;
  removeTab: Function;
}
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const CommonAddTabsWithTable = ({
  columns,
  tabsItems,
  activeKey,
  setActiveKey,
  addNewTab,
  removeTab,
}: Props) => {
  // Tabs state
  // const [activeKey, setActiveKey] = useState<string>("");

  // Render Table
  const renderTable = (key: string, data: any[]) => {
    return (
      <EditableTable
        tableTtile={"Rating Detail"}
        mainFieldName="ratings"
        columns={columns}
        initialData={data?.map((item) => ({ ...item, fieldName: key }))}
        setInitialData={() => {}}
        showAddRow={false}
        showActions={false}
      />
    );
  };

  // Handle tab edit (add or remove)
  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "add") {
      addNewTab(null);
    } else {
      removeTab(targetKey);
    }
  };

  const items = tabsItems?.map((item) => ({
    label: item.label,
    children: renderTable(item?.key, item?.ratingData),
    key: item.key,
    forceRender: true,
  }));

  return (
    <>
      {/* <Button onClick={addTab}>Add Rating</Button> */}
      <Tabs
        hideAdd
        onEdit={onEdit}
        type="editable-card"
        className="table_tabs"
        items={items}
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)} // Update active key on tab change
        tabBarExtraContent={{
          right: (
            <CommonButton
              className="mb-6 min-w-max"
              text={"Add New Rating"}
              htmlType="button"
              onClick={() => addNewTab(null)}
            />
          ),
        }}
      />
    </>
  );
};

export default CommonAddTabsWithTable;
