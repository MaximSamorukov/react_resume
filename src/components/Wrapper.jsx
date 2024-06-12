import React, { useContext } from "react";
import cn from "classnames";
import { Animation } from "./animation/index.jsx";
import { LanguageContext } from "../context/index.js";
import s from "./styles/wrapper.module.scss";
import { themes } from "../data/libraries.js";

const Wrapper = ({ children }) => {
  const { theme } = useContext(LanguageContext);
  const isBlackTheme = theme === themes.b;

  return (
    <div className={s.wrapper_outer}>
       <Animation argument={{}} />
      <div className={cn(s.wrapper_inner, { [s.whiteTheme]: !isBlackTheme })}>{children}</div>
    </div>
  );
};

export { Wrapper };
