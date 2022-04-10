import React from "react";


export const HeaderItem = ({ text, icon }) => {
  return (
    <div>
      { text }
    </div>
  )
}

const telegramLink = (text) => <a target="_blank" href={`https://t.me/${text}`}>{`@${text}`}</a>

export const TelegramHeaderItem = ({ text }) => {
  return (
    <div>
      {telegramLink(text)}
    </div>
  )
}

const websiteLink = (text) => <a target="_blank" href={text}>website</a>

export const WebsiteItem = ({ text }) => {
  return (
    <div>
      {websiteLink(text)}
    </div>
  )
}