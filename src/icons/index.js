import { ThunderboltOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { GithubIcon } from "./profiles/GithubIcon.jsx";
import { LinkedinIcon } from "./profiles/LinkedinIcon.jsx";
import { PDFIcon } from "./profiles/PDFicon.jsx";
import Codewars from "./Codewars";
import { Deploy } from "./Deploy";
import { WhatsappIcon } from './profiles/WhatsappIcon.jsx';
import { TelegramIcon } from './profiles/TelegramIcon.jsx';
import Email from './email.svg';

const icons = {
  codewars: <Codewars />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
  github_project: <GithubIcon dimension="20px" />,
  deploy: <Deploy />,
  resume_en: <PDFIcon />,
  resume_ru: <PDFIcon />,
  hexlet: <ThunderboltOutlined />,
  open_btn: <DoubleLeftOutlined />,
  whatsapp: <WhatsappIcon />,
  telegram: <TelegramIcon />,
  email: <img width={32} height={32} src={Email} />,
};

export { icons };
