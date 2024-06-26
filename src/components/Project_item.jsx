import React, { useState, useEffect, useRef, useContext } from "react";
import cn from "classnames";
import { Link } from "./Link";
import { OpenBtn } from "./Open_btn";
import s from "./styles/project_item.module.scss";
import { getStyle } from "./helpers";
import { LanguageContext } from "../context";

const ProjectItem = ({
  title,
  description,
  repositoryUrl,
  deployUrl,
  state,
}) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(LanguageContext);
  const ref = useRef(null);
  const width = ref.current?.clientWidth;
  const less500 = width <= 500;

  useEffect(() => {
    if (less500) {
      setOpen(() => true);
      return;
    }
    setOpen(() => state);
  }, [state, less500]);

  const links = [
    { url: repositoryUrl, type: "github_project" },
    { url: deployUrl, type: "deploy" },
  ].filter((l) => Boolean(l.url));
  const onClick = () => setOpen((prev) => !prev);
  return (
    <div ref={ref} className={s.project_item_wrapper}>
      <div className={s.title_wrapper}>
        <div className={s.title}>{title}</div>
        {open && (
          <div className={s.description_wrapper}>
            <div className={s.description}>{description}</div>
          </div>
        )}
      </div>
      <div className={cn(s.controls, open ? s.controls_open : s.controls_close)}>
        <div className={cn(s.btn, {[s.btn_open]: open, [s.btn_close]: open })}>
          <OpenBtn theme={theme} className={cn(s.btn_icon, open ? s.btn_icon_open : s.btn_icon_close )} onClick={onClick} type="open_btn" />
        </div>
          {links.map((link, index) => (
            <Link theme={theme} style={getStyle(open, index, less500)} key={link.url} url={link.url} type={link.type} />
          ))}
      </div>
    </div>
  );
};

export { ProjectItem };
