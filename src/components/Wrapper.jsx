import React from "react";
import s from "./styles/wrapper.module.scss";
import { Animation } from "./animation/index.jsx";

const Wrapper = ({ children }) => {
  return (
    <div className={s.wrapper_outer}>
       <Animation />
      <div className={s.wrapper_inner}>{children}</div>
    </div>
  );
};

export { Wrapper };
