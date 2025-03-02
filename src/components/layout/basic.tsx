'use client';

import { Button, Flex, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { ReactElement } from 'react';
import logo from '@assets/logo/palma.png';
import styles from './styles.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useServices } from '@root/src/context/service/context';

const BasicLayout = ({ children }: { children: ReactElement }) => {
  const { authUseCase } = useServices();

  const logoutApp = () => {
    authUseCase.logout();
  };

  return (
    <Layout className={styles.basicLayout}>
      <Header className={styles.basicLayout__header}>
        <Flex justify="space-between" align="center" flex={1}>
          <Image src={logo} width={24} height={24} alt="avatar" />
          <Button onClick={logoutApp}>Logout</Button>
        </Flex>
      </Header>
      <Content className={styles.basicLayout__content}>{children}</Content>
      <Footer className={styles.basicLayout__footer}>&copy; 2025 Palma. All rights reserved.</Footer>
    </Layout>
  );
};

export default BasicLayout;
