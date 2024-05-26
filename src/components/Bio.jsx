import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { data } from "../data/data";
import c from "./styles/bio.module.scss";
import Contacts from './Contacts';
const Bio = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  const {name, profession, contacts} = data[language]?.bio || {};
  return (
    <div className={c.bio}>
      <div className={c.bio_item}>
        <div className={c.key}>{`${name.key}:`}</div>
        <div>{`${name.name} ${name.surname}`}</div>
      </div>
      <div className={c.bio_item}>
        <div className={c.key}>{`${profession.key}: `}</div>
        <div>{`${profession.value}`}</div>
      </div>
      <div className={c.bio_item}>
        <div className={c.key}>{`${contacts.key}: `}</div>
        <Contacts contacts={contacts?.value}/>
      </div>
    </div>
  );
};

export { Bio };
