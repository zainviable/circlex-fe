import Images from "@/app/lib/theme/Images";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import CommonPopover from "../CommonPopover";

type CommonEditDeleteProps = {
  onPressDelete?: (_: any) => void;
  handlePressEdit?: (_: any) => void;
  handleOnDuplicateClick?: (_: any) => void;
  data: any;
  link?: string;
  deletePermission?: boolean;
  editPermission?: boolean;
  copyPermission?: boolean;
  copyComponent?: ReactNode;
  stockPermission?: boolean;
  stockComponent?: ReactNode;
  disableDelete?: boolean;
  disableEdit?: boolean;
  children?: ReactNode;
};

const CommonEditDelete: React.FC<CommonEditDeleteProps> = ({
  onPressDelete = () => {},
  handlePressEdit = () => {},
  handleOnDuplicateClick = () => {},
  data,
  link = "",
  deletePermission = true,
  editPermission = true,
  copyPermission = false,
  copyComponent = <></>,
  disableDelete = false,
  disableEdit = false,
  children,
}) => {
  return (
    <div className="flex items-center justify-start gap-2">
      {children}

      {copyPermission && (
        <CommonPopover text={"Copy"}>
          {copyComponent ? (
            <>{copyComponent}</>
          ) : (
            <Button
              className="bg-light-gradient mr-1 flex h-8 items-center justify-center rounded-md px-2 py-0"
              onClick={() => handleOnDuplicateClick(data)}
            >
              <Image src={Images.DuplicateBlue} alt={"Duplicate icon"} />
            </Button>
          )}
        </CommonPopover>
      )}

      {deletePermission && (
        <CommonPopover text={"Delete"}>
          <Button
            disabled={disableDelete}
            className="bg-light-gradient flex h-8 items-center justify-center rounded-md px-2 py-0"
            onClick={() => onPressDelete(data)}
          >
            <Image src={Images.TrashBlue} alt={"trash icon"} />
          </Button>
        </CommonPopover>
      )}

      {editPermission && (
        <CommonPopover text={"Edit"}>
          <Link href={link}>
            <Button
              disabled={disableEdit}
              className="bg-light-gradient flex h-8 items-center justify-center rounded-md px-2 py-0"
              onClick={() => handlePressEdit(data)}
            >
              <Image src={Images.EditAction} alt={"edit icon"} />
            </Button>
          </Link>
        </CommonPopover>
      )}
    </div>
  );
};

export default CommonEditDelete;
