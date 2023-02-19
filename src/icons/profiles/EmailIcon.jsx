import react from "react";
import email from "./email.svg";
import c from "../../components/styles/profile.module.scss";

export const EmailIcon = () => (
  <div className={c.profile_icon}>
    <img src={email} alt="email" />
  </div>
);
