"use client";
import Images from "../../lib/image";
import MenuItem from "./MenuItem";
import Style from "./style.module.css";
import { MenuItems } from "../../lib/utils/constant";

function Menu() {
  return (
    <>
      <div
        className={`hidden lg:block max-w-[300px] bg-[white] transition-all duration-250 z-[99] min-w-[300px] py-[40px] pl-[18px] pb-[80px]`}
      >
        <div
          className={`flex flex-col transition-all justify-center gap-[40px]`}
        >
          <img
            src={Images.fullLogo}
            alt="Logo"
            className={`w-[100%] max-w-[200px]`}
          />
          <ul
            className={`${Style.MenuWrapper} flex flex-col gap-[20px] justify-center items-start overflow-auto max-h-[78vh] pb-[50px] w-[100%] pt-[50px]`}
          >
            {MenuItems.map((item) => (
              <MenuItem
                title={item.title}
                key={item.title}
                itemLink={item.link}
                itemImage={item.image}
                itmeHoveredImage={item.hoveredImage} // Fixed typo
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
