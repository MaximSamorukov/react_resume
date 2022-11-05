import React, { useContext } from "react";
import { LanguageContext } from "../context";

export const JobItem = ({ item }) => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  const { company, title, start, end, description } = item;
  const nowDaysString = language === "en" ? "present time" : "н.в.";
  return (
    <div
      className="content"
      style={{
        marginTop: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            marginRight: 10,
          }}
        >
          <h4 className="ui header">{company}</h4>
        </div>
        <div
          style={{
            lineHeight: "18px",
          }}
        >
          <span>{start}</span>
          <span> - </span>
          <span>{typeof end === "string" ? end : nowDaysString}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            marginRight: 10,
            marginTop: 8,
          }}
        >
          <span>{title}</span>
        </div>
      </div>

      <div className="ui bulleted list">
        {description.map((i, index) => (
          <div key={index} className="item">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};
