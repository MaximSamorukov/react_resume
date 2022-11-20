import React, { useState, useContext } from "react";
import { data } from "../data/data";
import { Row, Col, Layout } from "antd";
import { usePageSize } from "../hooks/hooks";
import { HeaderItem, TelegramHeaderItem, WebsiteItem } from "./header_item";
import { LanguageContext } from "../context";
import c from "./styles/index.module.scss";

export const Header = () => {
  const context = useContext(LanguageContext);
  const { language, setLanguage } = context;
  const {
    name = "",
    surname = "",
    lastname = "",
    contacts = "",
    profession = "",
  } = data[language?.language || ""] || {};
  const toggleLang = () => {
    setLanguage((prev) => {
      if (prev.language === "en") return { language: "ru" };
      return { language: "en" };
    });
  };
  const [width] = usePageSize();
  const { Content } = Layout;
  const isPresent = width > 750;
  const contentSize = isPresent ? 12 : 16;
  return (
    <Content>
      <Row justify="center">
        <Col span={2}>
          <div
            style={{
              width: "70px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "white",
              }}
              onClick={toggleLang}
            >
              <span
                style={{
                  color: language.language === "en" ? "red" : "black",
                }}
              >
                EN
              </span>
              <span> | </span>
              <span
                style={{
                  color: language.language === "ru" ? "red" : "black",
                }}
              >
                RU
              </span>
            </button>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <HeaderItem text={`${name} ${surname}`} />
        <div style={{ width: 20, textAlign: "center" }}>
          <span>|</span>
        </div>
        <HeaderItem text={profession} />
      </Row>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <Col>
          <HeaderItem text={contacts.phone} />
        </Col>
        <Col>
          <div style={{ width: 20, textAlign: "center" }}>
            <span>|</span>
          </div>
        </Col>
        <Col>
          <HeaderItem text={contacts.email} />
        </Col>
        <Col>
          <div style={{ width: 20, textAlign: "center" }}>
            <span>|</span>
          </div>
        </Col>
        <Col>
          <TelegramHeaderItem text={contacts.telegram} />
        </Col>
        <Col>
          <div style={{ width: 20, textAlign: "center" }}>
            <span>|</span>
          </div>
        </Col>
        <Col>
          <WebsiteItem text={contacts.website} />
        </Col>
      </Row>
    </Content>
  );
};
