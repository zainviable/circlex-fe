import { Popover } from "antd";
import React, { ReactNode } from "react";
import CommonTextField from "../CommonTextField";

type CommonPopover = {
  text: string;
  children: ReactNode;
};

const CommonPopover: React.FC<CommonPopover> = ({ text, children }) => {
  const content = (
    <div>
      <CommonTextField text={text} fontWeight={600} />
    </div>
  );
  return (
    <Popover content={content} color="#D9EBF9" placement={"bottom"}>
      {children}
    </Popover>
  );
};

export default CommonPopover;
