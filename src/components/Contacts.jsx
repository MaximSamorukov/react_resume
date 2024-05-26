import React, { useContext } from "react";
import { message } from "antd";
import cn from "classnames";
import GE from "../icons/flags/GE.svg";
import RU from "../icons/flags/RU.svg";
import c from './styles/contacts.module.scss';
import { icons } from "../icons";
import { LanguageContext } from "../context";
import { copyLabel, languages } from "../data/libraries";

const flags = {
  GE,
  RU,
};

const Contacts = ({ contacts }) => {
  const { language: { language }} = useContext(LanguageContext);
  
  const onClick = (text) => {
    navigator.clipboard.writeText(text);
    message.open({
      content: copyLabel[language],
      type: 'info',
      duration: 0.8
    });
  }
  return (
    <div className={c.contacts}>
      {contacts.map((contact) => {
        if (contact.name === 'phone' && contact.active) {
          return (
            <>
              {contact.phone.filter((i => i.active)).map((ph, index) => (
                <div className={c.item}>
                  <div className={c.firstCol}><img src={flags[ph.country]} alt={`flag_${index}`} /></div>
                  <div>{ph.phone}</div>

                </div>
              ))}
            </>
          )
        }
        if (contact.name === 'email') {
          return (
            <div className={cn(c.item)} onClick={() => onClick(contact.link)}>
                <a href={`mailto:${contact.link}`}>
                  {icons[contact.name]}
                </a>
            </div>
          )
        }
        if (contact.name === 'telegram') {
          return (
            <div className={cn(c.item)}>
              <div><a target="_blank" rel="noreferrer" href={contact.link}>{icons[contact.name]}</a></div>
            </div>
          )
        }
        if (contact.name === 'whatsapp') {
          return (
            <div className={cn(c.item)}>
              <div><a target="_blank" rel="noreferrer" href={contact.link}>{icons[contact.name]}</a></div>
            </div>
          )
        }
      })}
    </div>
  );
};

export default Contacts;
