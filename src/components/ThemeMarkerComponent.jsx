import React from "react";
import BlackThemeIcon from "../icons/black_theme_icon.jsx";
import WhiteThemeIcon from '../icons/light_theme_icon.jsx';
import c from './styles/index.module.scss';
import { themes } from "../data/libraries";

const icons = {
   [themes.b]: <BlackThemeIcon />,
   [themes.w]: <WhiteThemeIcon />
}

export const ThemeMarker = ({ theme }) => (
   <div className={c.themeMarker}>
       {icons[theme]}
   </div>
);