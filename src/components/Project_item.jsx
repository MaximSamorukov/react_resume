import React, { useState, useEffect } from "react";
import { Link } from "./Link";
import { OpenBtn } from "./Open_btn";
import s from "./styles/project_item.module.scss";

const ProjectItem = ({
  title,
  description,
  repositoryUrl,
  deployUrl,
  state,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(() => state), [state]);

  const links = [
    { url: repositoryUrl, type: "github_project" },
    { url: deployUrl, type: "deploy" },
  ].filter((l) => Boolean(l.url));
  const onClick = () => setOpen((prev) => !prev);
  return (
    <div className={s.project_item_wrapper}>
      <div className={s.title_wrapper}>
        <div className={s.title}>{title}</div>
        {!open && (
          <div className={s.links_wrapper}>
            {links.map((link) => (
              <Link key={link.url} url={link.url} type={link.type} />
            ))}
          </div>
        )}
        <div className={s.btn}>
          <OpenBtn className={`${s.btn_icon} ${open ? s.open : s.close}`} onClick={onClick} type="open_btn" />
        </div>
      </div>
      {open && (
        <>
          <div className={s.description_wrapper}>
            <div className={s.description}>{description}</div>
          </div>
          <div className={`${s.links_wrapper} ${s.links_wrapper_open}`}>
            {links.map((link) => (
              <Link key={link.url} url={link.url} type={link.type} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { ProjectItem };
