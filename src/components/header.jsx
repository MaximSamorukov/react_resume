import React, { useContext } from "react";
import { data } from "../data/data";
import cn from "classnames";
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
  const langIsEn = language.language === "en";
  return (
    <Content>
      <Row justify="center">
        <Col span={2}>
          <div
            className={c.toggler}
          >
            <button
              className={c.toggleLanguageBtn}
              onClick={toggleLang}
            >
              <span
                className={cn(c.en, {[c.active]: langIsEn})}
              >
                EN
              </span>
              <span> | </span>
              <span
                className={cn(c.ru, {[c.active]: !langIsEn})}
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
