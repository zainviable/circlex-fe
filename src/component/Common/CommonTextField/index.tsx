import { CommonTextFieldProps } from "../../../types/common";
import React from "react";

/**
 * CommonTextField Component
 *
 * A reusable text field component for displaying text with customizable styling options.
 *
 * Props:
 * - parentClass: Additional CSS class for the parent container
 * - text: Text content to display
 * - children: Optional children elements
 * - font: Font family for the text
 * - fontSize: Font size of the text
 * - color: Text color
 * - mb: Margin bottom
 * - mt: Margin top
 * - onClick: Click event handler
 * - textAlign: Text alignment
 * - fontWeight: Font weight
 * - fontFamily: Font family
 * - letterSpacing: Letter spacing
 * - textDecoration: Text decoration
 * - paddingLeft: Left padding
 * - className: Additional CSS class for the text element
 * - title: Title attribute for tooltip
 * - lineHeight: Line height
 * - opacity: Opacity of the text
 * - width: Width of the text element
 * - margin: Margin around the text element
 * - paddingTop: Top padding
 * - whiteSpace: White space handling
 * - wordBreak: Word break handling
 * - textTransform: Text transformation
 */

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  parentClass,
  text,
  children,
  fontSize,
  color,
  mb = 0,
  mt = 0,
  onClick,
  textAlign,
  fontWeight,
  fontFamily,
  letterSpacing,
  textDecoration,
  paddingLeft,
  className,
  title,
  lineHeight,
  opacity,
  width,
  margin = 0,
  paddingTop,
  whiteSpace = "pre-wrap",
  wordBreak = "break-word",
  textTransform,
}) => {
  return (
    <div className={`${parentClass || ""} paragraph-parent`}>
      <p
        title={title} // Title attribute for tooltip
        className={` ${fontSize ? fontSize : "custom-text-14"} ${
          onClick ? "cursor-pointer" : ""
        } ${className || ""}`} // CSS classes including cursor-pointer if onClick is provided
        style={{
          margin,
          padding: 0,
          fontFamily,
          color: color || "text-black",
          marginBottom: mb,
          marginTop: mt,
          textAlign,
          fontWeight,
          letterSpacing,
          lineHeight,
          paddingLeft,
          paddingTop,
          textDecoration,
          whiteSpace,
          opacity,
          width,
          wordBreak,
          textTransform,
        }}
        onClick={onClick} // Click event handler
      >
        {text || children} {/* Render text or children */}
      </p>
    </div>
  );
};

export default CommonTextField;
