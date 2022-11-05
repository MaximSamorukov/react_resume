import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { Space } from "antd";
import { data } from "../data/data";
import { icons } from "../icons";
import c from "./styles/profile.module.scss";

const Profiles = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  const profiles = ["linkedin", "github", "resume_en", "resume_ru"];
  const filterProfile = (profile) => profiles.includes(profile.name);

  return (
    <div className={c.profile_wrapper}>
      {data[language].profiles
        .filter(filterProfile)
        .map(({ label, target, download, name, url }, index, arr) => {
          return (
            <div key={name} className={c.profile_item}>
              <a download={download} target={target} href={url}>
                <div className={c.profile_icon}>{icons[name]}</div>
                <div className={c.profile_label}>{label}</div>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export { Profiles };
