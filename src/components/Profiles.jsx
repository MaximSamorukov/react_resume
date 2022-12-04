import React, { useContext, useState, useEffect } from "react";
import Cosmic from 'cosmicjs';
import { LanguageContext } from "../context";
import { Space } from "antd";
import { data } from "../data/data";
import { icons } from "../icons";
import c from "./styles/profile.module.scss";

const Profiles = () => {
  const [profiles_, setProfiles] = useState([]);
  const {
    language: { language = "" },
    locale,
  } = useContext(LanguageContext);
  const profiles = ["linkedin", "github", "resume_en", "resume_ru"];
  const filterProfile = (profile) => profiles?.includes(profile?.name);
  const api = Cosmic();
  const bucket = api.bucket({
    slug: process.env.REACT_APP_COSMIC_SLUG,
    read_key: process.env.REACT_APP_COSMIC_READ,
  });
  useEffect(() => {
    bucket?.objects
    .find({
      type: "profiles",
      'metadata.locale': locale,
    })
    .props("metadata")
    .then((info) => {
      if (!info) {
        setProfiles(data[language]?.profiles);
      } else {
        setProfiles(info?.objects?.map((i) => i?.metadata));
      }
    })
    .catch(() => {
      setProfiles(data[language]?.profiles);
    })
  }, [locale]);

  return (
    <div className={c.profile_wrapper}>
      {profiles_
        ?.filter(filterProfile)
        ?.map(({ label, target, download, name, url }, index, arr) => {
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
