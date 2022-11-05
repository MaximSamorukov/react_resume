import react, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { languages } from "../data/libraries";

const defaultLanguage = { language: "en" };
export const LanguageContext = createContext();

const useToggleLanguage = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const { country } = response?.data;
        const lang =
          country.toLowerCase() === "ru" ? languages.RU : languages.EN;
        setLanguage({ language: lang });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return {
    language,
    setLanguage,
  };
};

export const LanguageContextProvider = (props) => {
  const value = useToggleLanguage();
  return <LanguageContext.Provider value={value} {...props} />;
};
