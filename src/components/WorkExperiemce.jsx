import React, { useContext } from "react";
import { JobItem } from "./Job_item";
import { data } from "../data/data";
import { LanguageContext } from "../context";
export const WorkExperience = (props) => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  return (
    <ul className="ui list">
      {data[language]?.job
        .filter((i) => i.active)
        .map((item, index) => {
          return <JobItem key={index} item={item} />;
        })}
    </ul>
  );
};
