import Style from "./style.module.css";

interface HeadingProps {
  text?: string; // Default: "Test Heading"
  textColor?: string; // Tailwind color class
  Fontsize?: string; // Tailwind font size class
  FontWeight?: string; // Tailwind font weight class
  LineHeight?: string; // Tailwind line height class
  applyResponsive?: boolean; // Determines if responsive styles are applied
  responsiveHidden?: boolean; // Determines if the component is hidden on specific breakpoints
}

function Heading({
  text = "Test Heading",
  textColor = "text-[#000000]",
  Fontsize = "text-[24px]",
  FontWeight = "font-[500]",
  LineHeight = "leading-[32px]",
  applyResponsive = true,
  responsiveHidden = false,
}: HeadingProps) {
  return (
    <h3
      className={`${
        applyResponsive ? `${Style.Heading}` : ``
      } ${textColor} ${Fontsize} ${FontWeight} ${LineHeight} ${
        responsiveHidden ? "hidden lg:flex" : ""
      }`}
    >
      {text}
    </h3>
  );
}

export default Heading;
