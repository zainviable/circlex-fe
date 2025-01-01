import React from "react";
import Heading from "../Heading/heading";
import Style from "./style.module.css";

interface menuItemProps {
  title?: string; // Title of the menu item
  itemImage?: string; // URL of the default image
  itemLink?: string; // URL link for the menu item
  itmeHoveredImage?: string; // URL of the hovered image (optional)
  active?: boolean; // Active state of the menu item (optional)
}

const menuItem: React.FC<menuItemProps> = ({
  title,
  itemImage,
  itemLink,
  itmeHoveredImage,
}) => {
  return (
    <li className={`w-[100%]`}>
      <a
        href={itemLink || ""}
        className={`${Style.menuItem} flex items-center gap-[15px] py-[15px] transition-all hover:bg-[#0091BF] rounded-[7px] lg:rounded-[16px] w-[100%] justify-start hover:pl-[12px] `}
      >
        <div>
          <img
            src={itemImage || ""}
            alt={title || ""}
            width={32}
            height={32}
            className="flex max-w-[28px] max-h-[28px] w-[100%]"
          />
          {itmeHoveredImage && (
            <img
              src={itmeHoveredImage}
              alt={`${title} hovered`}
              width={32}
              height={32}
              className={`${Style.hoveredImage} hidden max-w-[28px] max-h-[28px] w-[100%]`}
            />
          )}
        </div>
        <div className={``}>
          <Heading
            text={title}
            Fontsize="text-[14px]"
            FontWeight="font-[600]"
            LineHeight="leading-[21px]"
            textColor="text-[#737791]"
            applyResponsive={false}
          />
        </div>
      </a>
    </li>
  );
};

export default menuItem;
