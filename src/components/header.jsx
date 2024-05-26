import React, { useContext } from "react";
import { data } from "../data/data";
import { Row, Col, Layout } from "antd";
import { usePageSize } from "../hooks/hooks";
import { LanguageContext } from "../context";
import { locales, languages } from '../data/libraries';

import c from "./styles/index.module.scss";

export const Header = () => {
  const context = useContext(LanguageContext);
  const { language, setLanguage, locale, setLocale } = context;
  const {
    name = "",
    surname = "",
    lastname = "",
    contacts = "",
    profession = "",
  } = data[language?.language || ""] || {};
  const toggleLang = () => {
    setLanguage((prev) => {
      if (prev.language === languages.EN) return { language: languages.RU };
      return { language: languages.EN };
    });
    setLocale((prev) => {
      if (prev === locales.en) return locales.ru;
      return locales.en;
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
    </Content>
  );
};
