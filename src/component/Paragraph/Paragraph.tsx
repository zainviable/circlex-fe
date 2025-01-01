import Style from "./style.module.css";
function Paragraph({
  text = "Test Heading",
  textColor = "text-[#000000]",
  Fontsize = "text-[24px]",
  FontWeight = "font-[500]",
  LineHeight = "leading-[32px]",
  applyResponsive = true,
}) {
  return (
    <p
      className={`${
        applyResponsive ? `${Style.Para}` : ``
      } ${textColor} ${Fontsize} ${FontWeight} ${LineHeight}`} // Tailwind CSS classes
    >
      {text}
    </p>
  );
}
export default Paragraph;
