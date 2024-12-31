import React, { useEffect } from "react";
import { Button, Modal, Space } from "antd";
import CommonTextField from "../CommonTextField";
import Image from "next/image";
import Images from "@/app/lib/theme/Images";
import { CommonSuccessModalProps } from "@/app/types/common";

/**
 * CommonSuccessModal Component
 *
 * A reusable success modal component that integrates with Ant Design's Modal.
 *
 * Props:
 * - setIsModalVisible: Function to set the visibility of the modal
 * - isModalVisible: Boolean indicating if the modal is visible
 * - children: Content to display inside the modal
 * - width: Width of the modal
 * - title: Title of the modal
 * - titleText: Text for the title of the modal
 * - description: Description text for the modal
 * - onConfirm: Function to call on confirm action
 * - loading: Boolean indicating loading state
 * - className: Additional CSS class for the modal
 * - destroyOnClose: Boolean to destroy modal contents when closed
 * - content: Array of additional content to display in the modal
 */

const CommonSuccessModal: React.FC<CommonSuccessModalProps> = ({
  setIsModalVisible,
  isModalVisible,
  children,
  width,
  title = "Successfully Saved",
  titleText = "",
  onConfirm = () => {},
  className = "",
  destroyOnClose,
}) => {
  // Function to handle the OK button click
  const handleOk = () => {
    setIsModalVisible(false);
    onConfirm();
  };

  // Function to handle the Cancel button click
  const handleCancel = () => {
    setIsModalVisible(false);
    onConfirm();
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleOk();
      }
    };

    if (isModalVisible) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isModalVisible]);

  return (
    <div>
      <Modal
        destroyOnClose={destroyOnClose} // Destroy modal contents when closed
        className={`${className || ""} common-modal`} // Combine custom and default class names
        footer={
          <Button
            className="bg-dark-gradient h-10 rounded-xl"
            onClick={() => {
              handleOk(); // Handle cancel button click
            }}
          >
            <CommonTextField text="Ok" className="w-32 text-greyish-100" />
          </Button>
        } // Footer buttons
        width={width} // Set modal width
        open={isModalVisible} // Control modal visibility
        onOk={handleOk} // Handle OK button click
        onCancel={handleCancel} // Handle cancel button click
        title={
          <Space className="items-start">
            {/* Display success icon */}
            <Image
              className="mt-[2px]"
              src={Images.success}
              alt={"success icon"}
            />
            <div>
              {/* Display modal title */}
              <CommonTextField fontSize="custom-text-18" text={title} />
              {/* Display modal title text */}
              <CommonTextField className="mt-3 opacity-50" text={titleText} />
            </div>
          </Space>
        } // Set modal title
        centered // Center the modal
      >
        {children} {/* Content inside the modal */}
      </Modal>
    </div>
  );
};

export default CommonSuccessModal;
