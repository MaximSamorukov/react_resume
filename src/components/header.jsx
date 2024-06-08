import React, { useContext, useRef } from "react";
import { Switch } from 'antd';
import { data } from "../data/data";
import { Row, Col, Layout } from "antd";
import { usePageSize } from "../hooks/hooks";
import { LanguageContext } from "../context";
import { locales, languages, themes, languagesLabel } from '../data/libraries';
import './styles/_variables.scss';
import { LanguageMarker } from "./LanguageMarkerComponent";
import { ThemeMarker } from "./ThemeMarkerComponent";
import c from "./styles/index.module.scss";

export const Header = () => {
  const context = useContext(LanguageContext);
  const languageRef = useRef(null);
  const themeRef = useRef(null);
  const { language, setLanguage, locale, setLocale, theme, setTheme } = context;
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
    setTheme((prev) => {
      return prev === themes.b ? themes.w : themes.b
    })
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
        <div
          className={c.toggler}
        >
          <Switch
            ref={languageRef}
            checked={langIsEn}
            style={{
              backgroundColor: 'var(--toggleLanguageBtnColorBlack)'
            }}
            checkedChildren={<LanguageMarker language={languagesLabel.EN} />}
            unCheckedChildren={<LanguageMarker language={languagesLabel.RU} />}
            onChange={toggleLang}
          />
          <Switch
            checked={theme === themes.w}
            ref={themeRef}
            style={{
              backgroundColor: 'var(--toggleLanguageBtnColorBlack)'
            }}
            checkedChildren={<ThemeMarker theme={themes.w} />}
            unCheckedChildren={<ThemeMarker theme={themes.b} />}
            onChange={toggleTheme}
          />
        </div>
      </Row>
    </Content>
  );
};
