import React from "react";
import { Button, Modal, Space } from "antd";
import { CommonErrorModalProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Image from "next/image";
import Images from "@/app/lib/theme/Images";

/**
 * CommonErrorModal Component
 *
 * A reusable error modal component that integrates with Ant Design's Modal.
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

const CommonErrorModal: React.FC<CommonErrorModalProps> = ({
  setIsModalVisible,
  isModalVisible,
  children,
  width,
  title = "",
  onConfirm = () => {},
  className = "",
  destroyOnClose,
  content = [],
  zIndex,
}) => {
  // Function to handle the OK button click
  const handleOk = () => {
    setIsModalVisible(false);
  };

  // Function to handle the Cancel button click
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      zIndex={zIndex}
      destroyOnClose={destroyOnClose} // Destroy modal contents when closed
      className={`${className || ""} common-modal`} // Combine custom and default class names
      footer={
        <Button
          className="bg-dark-gradient h-10 rounded-xl"
          onClick={() => {
            handleCancel();
            onConfirm();
          }}
        >
          <CommonTextField text="Ok" className="w-32 text-greyish-100" />
        </Button>
      } // Footer buttons
      width={width} // Set modal width
      open={isModalVisible} // Control modal visibility
      onOk={handleOk} // Handle OK button click
      onCancel={handleCancel} // Handle Cancel button click
      title={
        <Space className="items-start">
          {/* Display error icon */}
          <Image className="mt-[2px]" src={Images.error} alt={"error icon"} />
          <div>
            {/* Display modal title */}
            <CommonTextField fontSize="custom-text-18" text={title} />

            {/* Display additional content if any */}
            {content?.length > 0 &&
              content?.map((item: any, i) => (
                <CommonTextField
                  key={i}
                  className="mt-3 opacity-50"
                  text={item}
                />
              ))}
          </div>
        </Space>
      } // Set modal title
      centered // Center the modal
      classNames="z-[9999]"
    >
      {children} {/* Content inside the modal */}
    </Modal>
  );
};

export default CommonErrorModal;
