import React, { useContext, useRef } from "react";
import { Switch } from 'antd';
import { data } from "../data/data";
import cn from "classnames";
import { Row, Col, Layout } from "antd";
import { usePageSize } from "../hooks/hooks";
import { LanguageContext } from "../context";
import { locales, languages, themes } from '../data/libraries';
import './styles/_variables.scss';
import c from "./styles/index.module.scss";
import { LanguageMarker } from "./LanguageMarkerComponent";
import { ThemeMarker } from "./ThemeMarkerComponent";

export const Header = () => {
  const context = useContext(LanguageContext);
  const languageRef = useRef(null);
  const themeRef = useRef(null);
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
    if (languageRef.current) {
      languageRef.current.blur();
    }
  };
  const toggleTheme = () => {
    if (themeRef.current) {
      themeRef.current.blur();
    }
  }
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
            <Switch
              ref={languageRef}
              checked={langIsEn}
              style={{
                backgroundColor: 'var(--toggleLanguageBtnColorBlack)'
              }}
              checkedChildren={<LanguageMarker language="En" />}
              unCheckedChildren={<LanguageMarker language="Рус" />}
              onChange={toggleLang}
            />
            <Switch
              ref={themeRef}
              style={{
                backgroundColor: 'var(--toggleLanguageBtnColorBlack)'
              }}
              checkedChildren={<ThemeMarker theme={themes.w} />}
              unCheckedChildren={<ThemeMarker theme={themes.b} />}
              onChange={toggleTheme}
            />
          </div>
        </Col>
      </Row>
    </Content>
  );
};
