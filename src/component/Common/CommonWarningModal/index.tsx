import React, { useEffect } from "react";
import { Button, Modal, Space } from "antd";
import { CommonWarningModalProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Image from "next/image";
import Images from "@/app/lib/theme/Images";

/**
 * CommonWarningModal Component
 *
 * A reusable warning modal component that integrates with Ant Design's Modal.
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

const CommonWarningModal: React.FC<CommonWarningModalProps> = ({
  setIsModalVisible,
  isModalVisible,
  children,
  width,
  onConfirm = () => {},
  loading,
  className = "",
  destroyOnClose,
  title = "Confirm",
  description = "Are you sure?",
}) => {
  // Function to handle the OK button click

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onConfirm(); // Trigger confirm action on Enter key press
      }
    };

    if (isModalVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown); // Cleanup event listener on unmount
    };
  }, [isModalVisible]);

  const handleOk = () => {
    setIsModalVisible(false);
    if (onConfirm) {
      onConfirm;
    }
  };

  // Function to handle the Cancel button click
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        destroyOnClose={destroyOnClose} // Destroy modal contents when closed
        className={`${className || ""} common-modal`} // Combine custom and default class names
        footer={
          <Space>
            {/* No button */}
            <Button
              className="h-10 rounded-xl"
              onClick={handleCancel} // Handle Cancel button click
            >
              <CommonTextField text="No" className="w-32 text-primary-100" />
            </Button>
            {/* Yes button */}
            <Button
              loading={loading}
              className="bg-dark-gradient h-10 rounded-xl"
              onClick={() => {
                if (onConfirm) {
                  onConfirm(); // Call onConfirm function if provided
                } else {
                  handleOk(); // Otherwise, handle OK button click
                }
              }}
            >
              <CommonTextField text="Yes" className="w-32 text-greyish-100" />
            </Button>
          </Space>
        } // Footer buttons
        width={width} // Set modal width
        open={isModalVisible} // Control modal visibility
        onOk={handleOk} // Handle OK button click
        onCancel={handleCancel} // Handle Cancel button click
        title={
          <Space className="items-start">
            {/* Display warning icon */}
            <Image
              className="mt-[2px]"
              src={Images.warn}
              alt={"warning icon"}
            />
            <div>
              {/* Display modal title */}
              <CommonTextField fontSize="custom-text-18" text={title} />
              {/* Display modal description */}
              {description && (
                <CommonTextField
                  className="mt-3 opacity-50"
                  text={description}
                />
              )}
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

export default CommonWarningModal;
