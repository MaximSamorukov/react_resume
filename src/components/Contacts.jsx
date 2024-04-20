import React from "react";
import GE from "../icons/flags/GE.svg";
import RU from "../icons/flags/RU.svg";
import c from './styles/contacts.module.scss';
import { icons } from "../icons";


const flags = {
  GE,
  RU,
};

const Contacts = ({ contacts }) => {
  return (
    <div className={c.contacts}>
      {contacts.map((contact) => {
        if (contact.name === 'phone') {
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
            <div className={`${c.item} ${c.imgPadding}`}>
              <div className={c.firstCol}>{icons[contact.name]}</div>
              <div><a href={`mailto:${contact.link}`}>{contact.link}</a></div>
            </div>
          )
        }
      })}
      <div className={c.socials}>
        {contacts.map((contact) => {
          if (contact.name === 'telegram') {
            return (
              <div className={c.socialItem}>
                <div><a target="_blank" rel="noreferrer" href={contact.link}>{icons[contact.name]}</a></div>
              </div>
            )
          }
          if (contact.name === 'whatsapp') {
            return (
              <div className={c.socialItem}>
                <div><a target="_blank" rel="noreferrer" href={contact.link}>{icons[contact.name]}</a></div>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
};

export default Contacts;
