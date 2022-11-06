import React, { useContext } from "react";
import { LanguageContext } from "../context";
import c from "./styles/job_item.module.scss";

export const JobItem = ({ item }) => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  const { company, title, start, end, description } = item;
  const nowDaysString = language === "en" ? "present time" : "н.в.";
  return (
    <div className={c.content}>
      <div className={c.company_wrapper}>
        <div className={c.company_name}>
          <h4 className="ui header">{company}</h4>
        </div>
        <div className={c.company_years_of_work}>
          <span>{start}</span>
          <span> - </span>
          <span>{typeof end === "string" ? end : nowDaysString}</span>
        </div>
      </div>

      <div className={`ui_ bulleted_ list_ ${c.bulleted_list}`}>
        {description.map((i, index) => (
          <div key={index} className={`_item ${c.list_item}`}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};
