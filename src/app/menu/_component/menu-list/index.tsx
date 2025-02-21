import CardMenu, { CardMenuType } from "@root/src/components/card/menu";
import { FC } from "react";

const menus: CardMenuType[] = [{ name: "Absensi", url: "/menu/absensi" }];

const MenuList: FC = async () => {
  return menus.map((menu, idx) => <CardMenu key={idx} menu={menu} />)
};

export default MenuList;
