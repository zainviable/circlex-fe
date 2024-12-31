import React from "react";
import CommonTextField from "../CommonTextField";

type Props = {
  title: string; // The title text to display
  className?: string;
};

/**
 * CommonFormTitle Component
 *
 * A simple component that displays a form title alongside an info icon.
 *
 * Props:
 * - title: The title text to display
 */

const CommonFormTitle = ({ title = "", className = "" }: Props) => {
  return (
    <div className={`flex items-center justify-start ${className}`}>
      {/* Display the title text using CommonTextField */}
      <CommonTextField
        text={title}
        className="text-black3"
        fontSize="custom-text-16"
      />
      {/* Display an info icon */}
      {/* <Image src={Images.InfoBlack} alt="info" className="ml-1" /> */}
    </div>
  );
};

export default CommonFormTitle;
