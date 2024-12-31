import React, { useEffect } from "react";
import { Button, Modal, Space } from "antd";
import { CommonModalProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Image from "next/image";
import Images from "@/app/lib/theme/Images";

const CommonModal: React.FC<CommonModalProps> = ({
  setIsModalVisible,
  isModalVisible,
  children,
  width,
  buttonText = "",
  footer = true,
  title = "",
  titleText = "",
  onConfirm,
  className = "",
  destroyOnClose,
  cancelBtnText = "",
  cancelBtn = false,
  loading = false,
  closeOnConfirm = true,
  changeRouteOnClose,
}) => {
  const handleOk = () => {
    if (closeOnConfirm) {
      setIsModalVisible(false);
    }
    if (onConfirm) {
      onConfirm();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    if (changeRouteOnClose) {
      changeRouteOnClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleOk(); // Trigger confirm action on Enter key press
      }
    };

    if (isModalVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown); // Cleanup event listener on unmount
    };
  }, [isModalVisible]);

  return (
    <div>
      <Modal
        destroyOnClose={destroyOnClose} // Destroy modal contents when closed
        className={`${className || ""} common-modal`} // Combine custom and default class names
        footer={
          footer &&
          (cancelBtn ? (
            <Space>
              <Button
                className="bg-light-gradient h-10 rounded-xl"
                onClick={() => handleCancel()}
              >
                <CommonTextField
                  text={cancelBtnText}
                  className="font-medium text-primary-100"
                />
              </Button>
              <Button
                className="bg-dark-gradient h-10 rounded-xl"
                loading={loading || false}
                onClick={() => handleOk()}
              >
                <CommonTextField
                  text={buttonText}
                  className="font-medium text-greyish-100"
                />
              </Button>
            </Space>
          ) : (
            <Button
              className="bg-dark-gradient h-10 rounded-xl"
              onClick={() => handleOk()}
            >
              <CommonTextField text={buttonText} className="text-greyish-100" />
            </Button>
          ))
        } // footer buttons
        width={width} // Set modal width
        open={isModalVisible} // Control modal visibility
        onOk={handleOk} // Handle OK button click
        onCancel={handleCancel} // Handle cancel button click
        title={
          <>
            <CommonTextField fontSize="custom-text-18" text={title} />
            <CommonTextField className="opacity-50" text={titleText} />
          </>
        } // Set modal title
        centered // Center the modal
        closeIcon={<Image src={Images.CloseDarkBlue} alt="Close icon" />}
      >
        {children}
      </Modal>
    </div>
  );
};

export default CommonModal;
