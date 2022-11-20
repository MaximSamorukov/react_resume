import React, { useContext, useRef } from "react";
import { Table, Row } from "antd";
import { useSize } from "ahooks";
import { LanguageContext } from "../context";
import { data } from "../data/data";
import { links_table_en, links_table_ru } from "../data/libraries";
import { ProjectItem } from "./Project_item";

import s from "./styles/projects.module.scss";

const Projects = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  const ref = useRef(null);
  const size = useSize(ref);
  const projects = data[language]?.projects;
  const state = size?.width > 400;

  return (
    <div ref={ref} className={s.projects_wrapper}>
      {projects.map((item) => (
        <ProjectItem key={item.title} state={state} {...item} />
      ))}
    </div>
  );
};

export { Projects };
