import React from "react";
import { data } from '../data/data';

const Instruments = () => {
  return (
    <>
      {
        data.ru.instruments.map(({ label }) => {
          return (
            <li>{label.reduce((acc, item) => {
              return `${item}, ${acc}`;
            }, '')}
            </li>
          )
        })
      }
    </>
  )
}

export {
  Instruments,
}