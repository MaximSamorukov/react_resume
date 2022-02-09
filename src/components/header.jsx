import React, { useState, useContext } from "react";
import { data } from "../data/data";
import { Row, Col, Layout } from 'antd';
import { usePageSize } from "../hooks/hooks";
import { HeaderItem, TelegramHeaderItem } from "./header_item";
import { LanguageContext } from "../context";



export const Header = () => {
  const context = useContext(LanguageContext);
  const { language, setLanguage } = context;
  const { name, surname, lastname,  contacts, profession } = data[language.language];
  const toggleLang = () => {
    setLanguage((prev) => {
      if (prev.language === 'en') return { language: 'ru' };
      return { language: 'en' };
    });
  }
  const [ width ] = usePageSize();
  const { Content } = Layout;
  const isPresent = width > 750;
  const contentSize = isPresent ? 12 : 16;

  return (
    <Content>
      <Row
        style={{
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <button style={{
            border: 'none',
            backgroundColor: 'white'
          }} onClick={toggleLang}>
            <span style={{
              color: language.language === 'en' ? 'red' : 'black',
            }}>EN</span>
            <span> | </span>
            <span
              style={{
                color: language.language === 'ru' ? 'red' : 'black',
              }}
            >RU</span>
          </button>
        </div>
      </Row>
      <Row
        style={{
          justifyContent: 'center',
        }}
      >
        <HeaderItem text={`${name} ${surname}`} />
        <div style={{ width: 20, textAlign: 'center' }}><span>|</span></div>
        <HeaderItem text ={profession} />

      </Row>
      <Row
        style={{
          justifyContent: 'center',
        }}
      >
        <HeaderItem text={contacts.phone} />
        <div style={{ width: 20, textAlign: 'center' }}><span>|</span></div>
        <HeaderItem text={contacts.email} />
        <div style={{ width: 20, textAlign: 'center' }}><span>|</span></div>
        <TelegramHeaderItem text={contacts.telegram} />
        <div style={{ width: 20, textAlign: 'center' }}><span>|</span></div>
        <HeaderItem text={contacts.website} />
      </Row>
    </Content>
  )
}