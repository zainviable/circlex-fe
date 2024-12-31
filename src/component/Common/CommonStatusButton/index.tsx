"use client";
import { Button, Dropdown } from "antd";
import React, { useState, useEffect } from "react";
import CommonModal from "../CommonModal";
import { IPoStatus } from "@/app/types/poStatus";
import { usePurchaseOrderControllerUpdateStatus } from "@/app/api/admin/admin";
import CommonErrorModal from "../CommonErrorModal";
import { errorManipulators } from "@/app/manipulators/ErrorManipulators";

// Props ka type define karna
interface CommonStatusButtonProps {
  menuItems: IPoStatus[];
  currentStatus: {
    id: string;
    name: string;
    color: string;
    isFinalized: boolean;
  };
  moduleType: string;
  parentId: string;
  disabled: boolean;
  isLoading: boolean;
  onChangeStatus: () => void;
  onFinalizedModal: () => void;
  finalizedStatusChange: boolean;
  className: string;
}

const CommonStatusButton: React.FC<CommonStatusButtonProps> = ({
  currentStatus,
  menuItems = [],
  moduleType,
  parentId,
  onChangeStatus,
  onFinalizedModal,
  disabled,
  finalizedStatusChange,
  className,
  isLoading,
}) => {
  const [visible, setVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorModalMessages, setErrorModalMessages] = useState<string[]>([]);
  const [checkSelectedStatus, setCheckSelectedStatus] = useState<IPoStatus>(
    {} as IPoStatus
  );
  const [nextColor, setNextColor] = useState<string>("");

  const { mutateAsync: updatePOstatus } =
    usePurchaseOrderControllerUpdateStatus();

  // useEffect to trigger API call when status changing is true
  useEffect(() => {
    if (finalizedStatusChange) {
      handleConfirm();
    }
  }, [finalizedStatusChange]);

  const handleMenuClick = (item: IPoStatus) => {
    setVisible(true);
    setCheckSelectedStatus(item);
    setErrorModalVisible(false);
    setNextColor(item.color);
  };

  const handleFinalizedVisibleModal = (item: IPoStatus) => {
    onFinalizedModal();
    setCheckSelectedStatus(item);
    setNextColor(item.color);
  };

  const handleConfirm = () => {
    updatePOstatus({
      data: {
        module: moduleType,
        statusId: checkSelectedStatus?.id || "",
      },
      id: parentId,
    })
      .then(() => {
        onChangeStatus();
        setVisible(false);
      })
      .catch((error) => {
        // Check if the error has a response from the server
        setErrorModalVisible(true);
        setErrorModalMessages(errorManipulators(error?.response?.data?.data));
      })
      .finally(() => {});
  };

  // Function to close both modals
  const handleErrorModalOk = () => {
    setErrorModalVisible(false); // Close error modal
    setVisible(false); // Close status modal
    if (finalizedStatusChange) onFinalizedModal();
  };

  const lightenHexColor = (hex: string) => `${hex}1a`;
  // Filter out the current status from menu items
  const menuData = menuItems.filter((item) => item.id !== menuItems[0].id);

  return (
    <>
      {menuItems?.length <= 1 ? (
        <Button
          className={`status-button gradient ${className && className}`}
          type="primary"
          htmlType="button"
          disabled={disabled || false}
          loading={isLoading || false}
          onClick={() => {
            menuItems[0]?.isFinalized
              ? handleFinalizedVisibleModal(menuItems[0])
              : handleMenuClick(menuItems[0]);
          }}
        >
          {menuItems[0]?.name}
        </Button>
      ) : (
        <Dropdown.Button
          className={`status-button gradient ${className && className}`}
          type="primary"
          htmlType="button"
          disabled={disabled || false}
          loading={isLoading || false}
          menu={{
            items: menuData.map((item) => ({
              key: item?.id,
              label: item?.name,
              onClick: () => {
                item?.isFinalized
                  ? handleFinalizedVisibleModal(item)
                  : handleMenuClick(item);
              },
            })),
          }}
          onClick={() => {
            menuItems[0]?.isFinalized
              ? handleFinalizedVisibleModal(menuItems[0])
              : handleMenuClick(menuItems[0]);
          }}
        >
          {menuItems[0]?.name}
        </Dropdown.Button>
      )}

      <CommonModal
        setIsModalVisible={setVisible}
        isModalVisible={visible}
        title="Are you Sure to Change the Status"
        titleText="Are You Sure"
        buttonText="Yes"
        width={512}
        cancelBtnText="No"
        cancelBtn={true}
        loading={isLoading || false}
        className="status-modal"
        onConfirm={handleConfirm}
        closeOnConfirm={false}
      >
        <div className="flex flex-col items-center justify-between rounded-lg border px-2.5 py-6 sm:flex-row">
          <StatusBlock
            status={currentStatus?.name}
            color={currentStatus?.color || "#03a66d"}
            lightColor={lightenHexColor(currentStatus?.color || "#03a66d")}
          />
          <span className="rotate-90 text-[20px] font-medium sm:rotate-0">
            {">"}
          </span>
          <StatusBlock
            status={checkSelectedStatus?.name}
            color={nextColor}
            lightColor={lightenHexColor(nextColor)}
          />
        </div>
      </CommonModal>

      <CommonErrorModal
        zIndex={999999}
        isModalVisible={errorModalVisible} // Controls modal visibility
        setIsModalVisible={setErrorModalVisible} // Function to hide the modal
        title="Error Occurred" // Title of the modal
        content={errorModalMessages || []} // Description/content
        onConfirm={handleErrorModalOk}
        closeOnConfirm={false}
      ></CommonErrorModal>
    </>
  );
};

// Helper component for rendering status block
const StatusBlock = ({
  status,
  color,
  lightColor,
}: {
  status: string;
  color: string;
  lightColor: string;
}) => (
  <p
    className="w-[180px] rounded-md pb-1 pt-1.5 text-center text-[14px] font-medium sm:text-[16px]"
    style={{ backgroundColor: lightColor, color: color }}
  >
    {status}
  </p>
);

export default CommonStatusButton;
