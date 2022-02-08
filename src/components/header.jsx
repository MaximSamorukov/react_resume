import React, { useEffect, useState } from "react";
import { data } from "../data/data";
import { Row, Col, Layout, Avatar, Space } from 'antd';
import { usePageSize } from "../hooks/hooks";
import { HeaderItem, TelegramHeaderItem } from "./header_item";

export const Header = () => {
  const [lang, setLang] = useState('ru');
  const { name, surname, lastname,  contacts, profession } = data[lang];
  const toggleLang = () => {
    setLang((prev) => {
      if (prev === 'en') return 'ru';
      return 'en';
    });
  }
  const [ width ] = usePageSize();
  const { Content } = Layout;
  const isPresent = width > 750;
  const avatarSize = isPresent ? 3 : 7;
  const contentSize = isPresent ? 12 : 16;
  return (
    <Content>
      <Row>
        <Col span={24}>
          <div
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 200,
            }}
          >
            <button style={{
              border: 'none',

            }} onClick={toggleLang}>
              EN / RU
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        {isPresent && <Col span={4}/>}
        <Col span={contentSize}>
          <div style={{
            marginTop: 10,
            paddingLeft: 23,
          }}>
            <HeaderItem text={`${name} ${surname} ${lastname}`} />
            <HeaderItem text ={profession} />
            <HeaderItem text={contacts.phone} />
            <HeaderItem text={contacts.email} />
            <TelegramHeaderItem text={contacts.telegram} />
            <HeaderItem text={contacts.website} />
          </div>
        </Col>
        {isPresent && <Col span={4} />}
      </Row>
    </Content>
  )
}