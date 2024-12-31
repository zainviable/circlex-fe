import { Button, message, Space, Upload, UploadFile } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Form from "antd/es/form";
import { FormInstance, UploadProps } from "antd/lib";
import Images from "@/app/lib/theme/Images";
import CommonTextField from "../CommonTextField";

type CommonUploadFieldProps = {
  form: FormInstance;
  name: string;
  label: string;
  allowedFileTypes?: string[];
  maxSize?: number;
  maxCount?: number;
  required?: boolean;
  errorMessage?: string;
  text?: string;
};

const CommonUploadField: React.FC<CommonUploadFieldProps> = ({
  form,
  name,
  label,
  allowedFileTypes,
  maxSize = 1024,
  maxCount = 1,
  required = true,
  errorMessage = "Invalid file",
  text = "Click to Upload",
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    setFileList(form.getFieldValue(name));
  }, [form, name]);

  const props: UploadProps = {
    name: "file",
    multiple: maxCount > 1,
    fileList,
    maxCount,
    onChange(info) {
      setFileList(info.fileList);
    },

    beforeUpload: (file: any) => {
      if (allowedFileTypes) {
        const isAllowedType = allowedFileTypes.includes(file?.type);
        if (!isAllowedType) {
          message.error(errorMessage);
          return Upload.LIST_IGNORE;
        }

        if (file.size > maxSize) {
          message.error("Entity too large!");
          return Upload.LIST_IGNORE;
        }
        return isAllowedType;
      }
    },
  };

  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Space direction="vertical" className="w-full">
      <CommonTextField text={label} />
      <Form.Item
        name={name}
        getValueFromEvent={getFile}
        rules={[
          {
            required,
            message: `${label} is required`,
          },
        ]}
      >
        <Upload {...props} defaultFileList={fileList || []} className="h-8">
          <Button className="h-8 w-full justify-start border border-[#8d95a3]">
            <Image src={Images.Upload} alt="upload" />
            <CommonTextField text={text} color="#000" />
          </Button>
        </Upload>
      </Form.Item>
    </Space>
  );
};

export default CommonUploadField;
