import react from "react";
import Whatsapp from "./whatsapp.svg";
import c from "../../components/styles/profile.module.scss";

export const WhatsappIcon = () => (
  <div className={c.profile_icon}>
    <img src={Whatsapp} alt="whatsapp" />
  </div>
);
