import { DoubleLeftOutlined } from "@ant-design/icons";
import { GithubIcon } from "./profiles/GithubIcon.jsx";
import { LinkedinIcon } from "./profiles/LinkedinIcon.jsx";
import { PDFIcon } from "./profiles/PDFicon.jsx";
import Codewars from "./Codewars";
import { Deploy } from "./Deploy";
import { WhatsappIcon } from './profiles/WhatsappIcon.jsx';
import { TelegramIcon } from './profiles/TelegramIcon.jsx';
import BlackThemeIcon from "./black_theme_icon.jsx";
import WhiteThemeIcon from './light_theme_icon.jsx';
import Email from './email.svg';
import { HexletIcon } from "./HexletIcon.jsx";
import { HTMLAcademyIcon } from "./HTMLAcademyIcon.jsx";
import { RSScoolIcon } from "./RSSchoolIcon.jsx";

const icons = {
  codewars: <Codewars />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon color="white" />,
  github_project: <GithubIcon dimension="20px" color="white" />,
  deploy: <Deploy color="white" />,
  resume_en: <PDFIcon />,
  resume_ru: <PDFIcon />,
  hexlet: <HexletIcon color="white" />,
  academy: <HTMLAcademyIcon color="white" />,
  open_btn: <DoubleLeftOutlined />,
  whatsapp: <WhatsappIcon />,
  telegram: <TelegramIcon />,
  email: <img width={32} height={32} src={Email} />,
  blackThemeIcon: <BlackThemeIcon />,
  whiteThemeIcon: <WhiteThemeIcon />,
  rss: <RSScoolIcon color="white" />,
  black: {
    codewars: <Codewars />,
    linkedin: <LinkedinIcon />,
    github: <GithubIcon color="white" />,
    github_project: <GithubIcon dimension="20px" color="white" />,
    deploy: <Deploy color="white"/>,
    resume_en: <PDFIcon />,
    resume_ru: <PDFIcon />,
    hexlet: <HexletIcon color="white" />,
    academy: <HTMLAcademyIcon color="white" />,
    rss: <RSScoolIcon color="white" />,
    open_btn: <DoubleLeftOutlined />,
    whatsapp: <WhatsappIcon />,
    telegram: <TelegramIcon />,
    email: <img width={32} height={32} src={Email} />,
    blackThemeIcon: <BlackThemeIcon />,
    whiteThemeIcon: <WhiteThemeIcon />,
  },
  white: {
    codewars: <Codewars />,
    linkedin: <LinkedinIcon />,
    github: <GithubIcon color="black" />,
    github_project: <GithubIcon dimension="20px" color="black" />,
    deploy: <Deploy color="black" />,
    resume_en: <PDFIcon />,
    resume_ru: <PDFIcon />,
    hexlet: <HexletIcon color="black" />,
    academy: <HTMLAcademyIcon color="black" />,
    rss: <RSScoolIcon color="black" />,
    open_btn: <DoubleLeftOutlined />,
    whatsapp: <WhatsappIcon />,
    telegram: <TelegramIcon />,
    email: <img width={32} height={32} src={Email} />,
    blackThemeIcon: <BlackThemeIcon />,
    whiteThemeIcon: <WhiteThemeIcon />,
  }
};

export { icons };
