import React from "react";

export const HeaderItem = ({ text, icon, className }) => {
  return <div className={className}>{text}</div>;
};

const telegramLink = (text) => (
  <a
    target="_blank"
    href={`https://t.me/${text}`}
    rel="noreferrer"
  >{`@${text}`}</a>
);

export const TelegramHeaderItem = ({ text }) => {
  return <div>{telegramLink(text)}</div>;
};

const websiteLink = (text) => (
  <a target="_blank" href={text} rel="noreferrer">
    website
  </a>
);

export const WebsiteItem = ({ text }) => {
  return <div>{websiteLink(text)}</div>;
};
