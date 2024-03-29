import React from "react";
import s from "./styles/wrapper.module.scss";

const Wrapper = ({ children }) => {
  return (
    <div className={s.wrapper_outer}>
      <div className={s.wrapper_inner}>{children}</div>
    </div>
  );
};

export { Wrapper };
