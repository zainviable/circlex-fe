"use client";
import SearchBar from "../../component/searchBar/searchBar";
import Heading from "../../component/Heading/heading";
import AdminBar from "../../component/adminBar/adminBar";
import { Drawer } from "antd";
import MenuItem from "../Menu/MenuItem";
import { useState } from "react";
import Images from "../../lib/image";
import { MenuItems } from "../../lib/utils/constant";
import NotificationBar from "../../component/adminBar/notificationBar";

function NavBar() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="bg-white p-[30px] flex justify-between items-center gap-[20px] flex-row fixed w-[100%] lg:w-[calc(100%-300px)]">
        <button onClick={showDrawer} className="block lg:hidden">
          <img
            src={Images.hamBurger}
            alt="hamBurger"
            className="w-[100%] max-w-[30px] max-h-[30px]"
          />
        </button>
        <Heading
          text="Dashboard"
          textColor="text-[#151D48]"
          Fontsize="text-[24px]"
          LineHeight="leading-[32px]"
          FontWeight="font-[600]"
          responsiveHidden={true}
        />
        <SearchBar maxWidth="max-w-[unset] lg:max-w-[400px]" />
        <AdminBar />
      </div>
      <Drawer
        placement={"left"}
        closable={true}
        aria-hidden={true}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <img
          src={Images.fullLogo}
          alt="Logo"
          className={`w-[100%] max-w-[200px]`}
        />

        <ul
          className={`flex flex-col gap-[20px] justify-center items-start pb-[50px] w-[100%] pt-[50px]`}
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
        <NotificationBar />
      </Drawer>
    </>
  );
}
export default NavBar;
