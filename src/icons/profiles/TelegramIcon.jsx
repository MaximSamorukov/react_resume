import react from "react";
import Telegram from "./telegram.svg";
import c from "../../components/styles/profile.module.scss";

export const TelegramIcon = () => (
  <div className={c.profile_icon}>
    <img src={Telegram} alt="telegram" />
  </div>
);
