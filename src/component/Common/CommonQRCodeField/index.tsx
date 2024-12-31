import React from "react";
import CommonInputField from "../CommonInputField";
import QrCode from "../../userManagement/UserDetail/qrcode";

const CommonQRCodeField = ({
  handleQrScan,
  name,
  disabled,
}: {
  handleQrScan: any;
  disabled?: boolean;
  name: string;
}) => {
  return (
    <div className="flex flex-col rounded-md border border-[#71CB27] bg-[#4BCB271A] px-2.5 pb-3.5 pt-1.5">
      <CommonInputField
        label="Barcode"
        placeholder=""
        name={name}
        disabled={disabled}
        className="min-h-[50px]"
        isRequired={false}
        suffix={<QrCode onQrScan={handleQrScan} />}
      />
    </div>
  );
};

export default CommonQRCodeField;
