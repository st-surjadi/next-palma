'use client';

import { Avatar, Button, Flex, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { ReactElement } from 'react';
import logo from '@assets/logo/palma.png';
import styles from './styles.module.scss';
import Image from 'next/image';

const BasicLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Layout className={styles.basicLayout}>
      <Header className={styles.basicLayout__header}>
        <Flex justify="space-between" align="center" flex={1}>
          <Avatar src={<Image src={logo} width={12} height={12} alt="avatar" />} />
          <Button>Log Out</Button>
        </Flex>
      </Header>
      <Content className={styles.basicLayout__content}>{children}</Content>
      <Footer className={styles.basicLayout__footer}>&copy; 2025 Palma. All rights reserved.</Footer>
    </Layout>
  );
};

export default BasicLayout;
