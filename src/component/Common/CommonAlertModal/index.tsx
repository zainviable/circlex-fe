import React from "react";
import { Button, Modal, Space } from "antd";
import { CommonAlertModalProps } from "@/app/types/common";
import CommonTextField from "../CommonTextField";
import Image from "next/image";
import Images from "@/app/lib/theme/Images";

/**
 * CommonAlertModal Component
 *
 * A reusable alert modal component that integrates with Ant Design's Modal.
 *
 * Props:
 * - type: Type of alert ('success', 'warn', 'error')
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

const CommonAlertModal: React.FC<CommonAlertModalProps> = ({
  type,
  setIsModalVisible,
  isModalVisible,
  children,
  width,
  title = "",
  titleText = "",
  onConfirm = () => {},
  className = "",
  destroyOnClose,
  content = [],
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
    <div>
      <Modal
        destroyOnClose={destroyOnClose} // Destroy modal contents when closed
        className={`${className || ""} common-modal`} // Combine custom and default class names
        footer={
          type === "warn" ? (
            <Space>
              <Button
                className="h-10 rounded-xl"
                onClick={() => {
                  handleCancel();
                }}
              >
                <CommonTextField text="No" className="w-32 text-primary-100" />
              </Button>
              <Button
                className="bg-dark-gradient h-10 rounded-xl"
                onClick={() => {
                  handleCancel();
                  if (onConfirm) {
                    onConfirm();
                  }
                }}
              >
                <CommonTextField text="Yes" className="w-32 text-greyish-100" />
              </Button>
            </Space>
          ) : (
            <Button
              className="bg-dark-gradient h-10 rounded-xl"
              onClick={() => {
                handleCancel();
                onConfirm();
              }}
            >
              <CommonTextField text="Ok" className="w-32 text-greyish-100" />
            </Button>
          )
        } // Footer buttons, different based on the type prop
        width={width} // Set modal width
        open={isModalVisible} // Control modal visibility
        onOk={handleOk} // Handle OK button click
        onCancel={handleCancel} // Handle Cancel button click
        title={
          <Space className="items-start">
            {/* Display icon based on the type of the modal */}
            <Image
              className="mt-[2px]"
              src={
                type === "success"
                  ? Images.success
                  : type === "warn"
                    ? Images.warn
                    : Images.error
              }
              alt={
                type === "success"
                  ? "success icon"
                  : type === "warn"
                    ? "warn icon"
                    : "error icon"
              }
            />
            <div>
              {/* Display modal title based on the type */}
              <CommonTextField
                fontSize="custom-text-18"
                text={
                  type === "success"
                    ? "Successfully Save"
                    : type === "warn"
                      ? "Confirm"
                      : title
                }
              />

              {/* Display additional text based on the type */}
              {(type === "success" || type === "warn") && (
                <CommonTextField
                  className="mt-3 opacity-50"
                  text={type === "success" ? titleText : "Are you sure"}
                />
              )}

              {/* Display additional content for error type */}
              {type === "error" &&
                content?.length > 0 &&
                content?.map((item, i) => (
                  <CommonTextField
                    key={i}
                    className="mt-3 opacity-50"
                    text={item}
                  />
                ))}
            </div>
          </Space>
        } // Set modal title and content based on the type
        centered // Center the modal
      >
        {children} {/* Content inside the modal */}
      </Modal>
    </div>
  );
};

export default CommonAlertModal;
