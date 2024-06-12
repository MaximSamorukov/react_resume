import React, { useEffect, useState, useContext } from "react";
import { data } from "../data/data";
import cn from "classnames";
import { Row, Col, Layout } from "antd";
import { usePageSize } from "../hooks/hooks";
import { LanguageContext } from "../context";
import { HeaderItem } from "./header_item";
import { titles_en, titles_ru, languages, themes } from "../data/libraries";
import s from './styles/content_item.module.scss';

export const ContentItem = ({ title, children, style = {} }) => {
  const {
    theme,
    language: { language },
  } = useContext(LanguageContext);
  const [width] = usePageSize();
  const { Content } = Layout;
  const isPresent = width > 750;
  const titles = language === languages.EN ? titles_en : titles_ru;
  const isBlackTheme = theme === themes.b;
  const themeStyle = {
    [s.itemHeader_blackTheme]: isBlackTheme,
    [s.itemHeader_whiteTheme]: !isBlackTheme,
  }
  return (
    <div>
      <Content className={s.content}>
        <Row>
          {isPresent && <Col span={4} />}
          <Col span={5}>
            <div
              className={cn("ui middle header", s.itemHeader, themeStyle)}
            >
              {titles[title]}
            </div>
          </Col>
          <Col span={8}>
          </Col>
          {isPresent && <Col span={4} />}
        </Row>
        <Row>
          {isPresent && <Col span={4} />}
          <Col style={style}>{children}</Col>
          {isPresent && <Col span={4} />}
        </Row>
      </Content>
    </div>
  );
};
