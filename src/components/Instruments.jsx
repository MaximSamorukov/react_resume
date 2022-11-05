import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { data } from "../data/data";

const Instruments = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  return (
    <ul
      style={{
        marginLeft: 40,
      }}
      className="ui bulleted list"
    >
      {data[language].instruments.map(({ label }, index) => {
        return (
          <div key={index} className="item">
            {label.reduceRight((acc, item) => {
              return `${item}, ${acc}`;
            }, "")}
          </div>
        );
      })}
    </ul>
  );
};

export { Instruments };
