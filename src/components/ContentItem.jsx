import React, { useEffect, useState, useContext } from "react";
import { data } from "../data/data";
import { Row, Col, Layout } from 'antd';
import { usePageSize } from "../hooks/hooks";
import { LanguageContext } from "../context";
import { HeaderItem } from "./header_item";
import { titles_en, titles_ru } from '../data/libraries';

export const ContentItem = ({ title, children }) => {
  const { language: { language }} = useContext(LanguageContext);
  const [ width ] = usePageSize();
  const { Content } = Layout;
  const isPresent = width > 750;
  const titles = language === 'en' ? titles_en : titles_ru;
  return (
    <div>
      <Content style={{ marginTop: 15 }}>
        <Row>
          {isPresent && <Col span={4}/>}
          <Col span={5}><div className="ui large header">{titles[title]}</div></Col>
          <Col span={8}>
            <div style={{
              backgroundColor: 'blue',
              maxHeight: 3,
              height: 3,
              width: '100%',
              marginTop: 13
            }} />
          </Col>
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
    </div>
  )
}