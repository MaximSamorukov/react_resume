import React from "react";

export const HeaderItem = ({ text, icon }) => {
  return (
    <div>
      { text }
    </div>
  )
}

const telegramLink = (text) => <a href={`https://t.me/${text}`}>{`@${text}`}</a>

export const TelegramHeaderItem = ({ text }) => {
  return (
    <div>
      {telegramLink(text)}
    </div>
  )
}