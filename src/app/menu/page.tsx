import { Metadata } from 'next';
import { FC } from 'react';
import MenuList from './_component/menu-list';

export const metadata: Metadata = {
  title: 'Menu',
};

const Page: FC = () => {
  return (
    <div>
      <MenuList />
    </div>
  );
};

export default Page;
