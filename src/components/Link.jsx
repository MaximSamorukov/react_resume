import react from "react";
import { icons } from "../icons";
import s from "./styles/link.module.scss";

const Link = ({ url, type, style, theme }) => {
  return (
    <div className={s.link} style={style}>
      <a href={url} target="_blank" download={false} rel="noreferrer">
        {icons[theme][type]}
      </a>
    </div>
  );
};

export { Link };
