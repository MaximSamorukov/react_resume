import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { data } from "../data/data";
import c from './styles/instruments.module.scss';

const Instruments = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  return (
    <div
      className={c.bulleted_list}
    >
      {data[language]?.instruments.map(({ label }, index) => {
        return (
          <div key={index} className={c.list_item}>
            {label.reduceRight((acc, item) => {
              return `${item}, ${acc}`;
            }, "")}
          </div>
        );
      })}
    </div>
  );
};

export { Instruments };
