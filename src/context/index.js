import react, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { languages, locales } from "../data/libraries";

const defaultLanguage = { language: "en" };
const defaultLocale = locales[defaultLanguage.language];
export const LanguageContext = createContext();


const useToggleLanguage = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [locale, setLocale] = useState(defaultLocale);
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const { country } = response?.data;
        const lang =
          country.toLowerCase() === "ru" ? languages.RU : languages.EN;
        setLanguage({ language: lang });
        setLocale(locales[lang]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return {
    language,
    setLanguage,
    locale,
    setLocale,
  };
};

export const LanguageContextProvider = (props) => {
  const value = useToggleLanguage();
  return <LanguageContext.Provider value={value} {...props} />;
};
