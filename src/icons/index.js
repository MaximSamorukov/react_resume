import { ThunderboltOutlined } from "@ant-design/icons";
import { GithubIcon } from "./profiles/GithubIcon.jsx";
import { LinkedinIcon } from "./profiles/LinkedinIcon.jsx";
import { PDFIcon } from "./profiles/PDFicon.jsx";
import Codewars from "./Codewars";

const icons = {
  codewars: <Codewars />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
  resume_en: <PDFIcon />,
  resume_ru: <PDFIcon />,
  hexlet: <ThunderboltOutlined />,
};

export { icons };
