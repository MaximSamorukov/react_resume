import react, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { languages, locales, themes } from "../data/libraries";

const defaultLanguage = { language: "en" };
const defaultTheme = themes.b;
const defaultLocale = locales[defaultLanguage.language];
export const LanguageContext = createContext();


const useToggleLanguage = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
  const [locale, setLocale] = useState(defaultLocale);
  const { href } = window.location;
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
      }).finally(() => {
        const url = new URL(href);
        const params = url.searchParams;
        const lang = params.get('lang');
        if (lang) {
          const language = lang === "ru" ? languages.RU : languages.EN;
          setLanguage({ language });
          setLocale(locales[language]);
        }
      })
  }, []);
  return {
    language,
    setLanguage,
    locale,
    setLocale,
    theme,
    setTheme
  };
};

export const LanguageContextProvider = (props) => {
  const value = useToggleLanguage();
  return <LanguageContext.Provider value={value} {...props} />;
};
