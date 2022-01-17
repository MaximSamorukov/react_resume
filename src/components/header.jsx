import React from "react";
import { data } from "../data/data";
import { Row, Col, Layout, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

export const Header = () => {
  const { name, surname, contacts, profession } = data.en;
  const { Content } = Layout;
  return (
    <Content>
      <Row>
        <Col span={4} />
        <Col span={3}>
          <Avatar
            style={{
              margin: 20,
            }}
            size={{ xs: 48, sm: 64, md: 80, lg: 128, xl: 160, xxl: 200 }}
            icon={<AntDesignOutlined />}
          />
        </Col>
        <Col span={13}>
          <div style={{
            margin: 20,
          }}>
            <div>{`${name} ${surname}`}</div>
            <div>{profession}</div>
            <div>{contacts.phone}</div>
            <div>{contacts.email}</div>
          </div>
        </Col>
        <Col span={4} />
      </Row>
    </Content>
  )
}