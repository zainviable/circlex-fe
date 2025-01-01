import Paragraph from "../Paragraph/Paragraph";
import Images from "../../lib/image";

interface NotificationBarProps {
  responsiveHidden?: boolean; // `responsiveHidden` is optional and a boolean
}

function NotificationBar({ responsiveHidden = false }: NotificationBarProps) {
  return (
    <div
      className={`flex items-center gap-[16px] ${
        responsiveHidden ? "hidden lg:flex" : ""
      }`}
    >
      <img
        src={Images.Avatar}
        alt="Avatar"
        className="max-w-[40px] max-h-[40px] rounded-[100%]"
      />
      <div>
        <Paragraph
          text="John Doe"
          Fontsize="text-[16px]"
          FontWeight="font-[700]"
          textColor="text-[#000000]"
          LineHeight="leading-[22px]"
          applyResponsive={false}
        />
        <Paragraph
          text="Admin"
          Fontsize="text-[14px]"
          FontWeight="font-[500]"
          LineHeight="leading-[20px]"
          textColor="text-[#475569]"
          applyResponsive={false}
        />
      </div>
    </div>
  );
}

export default NotificationBar;
