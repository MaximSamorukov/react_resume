import React from "react";
import { data } from '../data/data';

const Instruments = () => {
  return (
    <ul className="ui list">
      {
        data.ru.instruments.map(({ label }, index) => {
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