import React from "react";
import { CommonHeadingProps } from "../../../types/common";
import Title from "antd/es/typography/Title";

/**
 * CommonHeading Component
 *
 * A reusable heading component that integrates with Ant Design's Typography.Title component.
 *
 * Props:
 * - text: Text content for the heading
 * - children: React nodes to be displayed as children within the heading
 * - font: Font family for the heading text
 * - fontSize: Font size for the heading text
 * - color: Text color for the heading
 * - mb: Margin bottom for the heading (default is 0)
 * - mt: Margin top for the heading (default is 0)
 * - onClick: Event handler for click events on the heading
 * - textAlign: Text alignment for the heading (e.g., left, center, right)
 * - fontWeight: Font weight for the heading text
 * - fontFamily: Font family for the heading text
 * - letterSpacing: Letter spacing for the heading text
 * - textDecoration: Text decoration for the heading (e.g., underline)
 * - paddingLeft: Padding left for the heading
 * - paddingTop: Padding top for the heading
 * - className: Additional CSS class for the heading
 * - title: HTML title attribute for the heading
 * - lineHeight: Line height for the heading text
 * - level: Heading level for the Typography.Title component (default is 1)
 * - width: Width of the heading element
 */
const CommonHeading: React.FC<CommonHeadingProps> = ({
  text,
  children,
  font,
  fontSize,
  color,
  mb = 0,
  mt = 0,
  onClick,
  textAlign,
  fontWeight,
  letterSpacing,
  textDecoration,
  paddingLeft,
  paddingTop,
  className,
  title,
  lineHeight,
  level = 1,
  width,
}) => {
  return (
    <Title
      level={level} // Ant Design's Title level
      title={title} // HTML title attribute
      className={`${className || ""} ${
        fontSize ? fontSize : "custom-heading-1"
      } text-black2 ${onClick ? "cursor-pointer" : ""}`} // CSS classes including cursor-pointer if onClick is provided
      style={{
        width, // Set the width of the heading element
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        fontFamily: font, // Set the font family
        fontSize, // Set the font size
        color, // Set the text color
        marginBottom: mb, // Set the margin bottom
        marginTop: mt, // Set the margin top
        textAlign, // Set the text alignment
        fontWeight, // Set the font weight
        letterSpacing, // Set the letter spacing
        lineHeight, // Set the line height
        paddingLeft, // Set the padding left
        paddingTop, // Set the padding top
        textDecoration, // Set the text decoration
        whiteSpace: "pre-wrap", // Preserve whitespace formatting
      }}
      onClick={onClick} // Click event handler
    >
      {text || children}
    </Title>
  );
};

export default CommonHeading;
