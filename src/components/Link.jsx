import react from "react";
import { icons } from "../icons";
import s from "./styles/link.module.scss";

const Link = ({ url, type }) => {
  return (
    <div className={s.link}>
      <a href={url} target="_blank" download={false} rel="noreferrer">
        {icons[type]}
      </a>
    </div>
  );
};

export { Link };
