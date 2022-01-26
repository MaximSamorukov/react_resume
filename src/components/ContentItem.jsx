import React, { useEffect, useState } from "react";
import { data } from "../data/data";
import { Row, Col, Layout, Avatar, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { usePageSize } from "../hooks/hooks";
import { HeaderItem } from "./header_item";
import { titles } from '../data/libraries';

export const ContentItem = ({ title, children }) => {
  const { name, surname, contacts, profession } = data['ru'];
  const [ width ] = usePageSize();
  const { Content } = Layout;
  const isPresent = width > 750;
  const avatarSize = isPresent ? 3 : 7;
  const contentSize = isPresent ? 12 : 16;
  return (
    <Content>
      <Row>
        {isPresent && <Col span={4}/>}
        <Col span={5}><h3>{titles[title]}</h3></Col>
        <Col span={8} />
        {isPresent && <Col span={4} />}
      </Row>
      <Row>
        {isPresent && <Col span={4}/>}
        <Col>
          {children}
        </Col>
        {isPresent && <Col span={4} />}
      </Row>
    </Content>
  )
}