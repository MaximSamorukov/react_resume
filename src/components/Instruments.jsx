import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { data } from '../data/data';

const Instruments = () => {
  const { language: { language }} = useContext(LanguageContext);
  return (
    <ul className="ui list">
      {
        data[language].instruments.map(({ label }, index) => {
          return (
            <div key={index} className="item">{label.reduceRight((acc, item) => {
              return `${item}, ${acc}`;
            }, '')}
            </div>
          )
        })
      }
    </ul>
  )
}

export {
  Instruments,
}