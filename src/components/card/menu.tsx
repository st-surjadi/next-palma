"use client";

import { Card } from "antd";
import Link from "next/link";

export type CardMenuType = {
  name: string;
  url: string;
};

const CardMenu = ({ menu }: { menu: CardMenuType }) => {
  return (
    <Link href={menu.url}>
      <Card>{menu.name}</Card>
    </Link>
  );
};

export default CardMenu;
