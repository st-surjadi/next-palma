import CardMenu, { CardMenuType } from '@root/src/components/card/menu';
import BasicLayout from '@root/src/components/layout/basic';
import { Col, Row } from 'antd';
import { FC } from 'react';

const menus: CardMenuType[] = [
  { name: 'Absensi', url: '/menu/absensi' },
  { name: 'Pekerjaan', url: '/menu/pekerjaan' },
  { name: 'Lembur', url: '/menu/lembur' },
];

const MenuList: FC = async () => {
  return (
    <BasicLayout>
      <Row gutter={[0, 16]} justify="center">
        {menus.map((menu, idx) => (
          <Col key={idx} xs={24} sm={12} md={8}>
            <CardMenu menu={menu} />
          </Col>
        ))}
      </Row>
    </BasicLayout>
  );
};

export default MenuList;
