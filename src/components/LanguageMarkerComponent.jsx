import React from "react";
import c from './styles/index.module.scss';

export const LanguageMarker = ({ language }) => (
   <div className={c.languageMarker}>
      <span>
         {language}
      </span>
   </div>
);