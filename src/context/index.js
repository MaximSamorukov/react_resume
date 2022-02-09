import react, { createContext, useState } from "react";

const defaultLanguage = { language: 'ru' };
export const LanguageContext = createContext();

const useToggleLanguage = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  return {
    language,
    setLanguage
  }
}

export const LanguageContextProvider = (props) => {
  const value = useToggleLanguage();
  return (
    <LanguageContext.Provider value={value} {...props} />
  )
}