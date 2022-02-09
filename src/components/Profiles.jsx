import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { data } from '../data/data';

const Profiles = () => {
  const { language: { language }} = useContext(LanguageContext);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      {
        data[language].profiles.map(({ name, url }, index, arr) => {
          return (
            <>
              <div key={name} className="item">
                <a href={url}>{name}</a>
              </div>
              { (arr.length > index + 1) && (
                <div style={{
                  width: 20,
                  textAlign: 'center'
                }}>|</div>
              )}
            </>
          )
        })
      }
    </div>
  )
}

export {
  Profiles,
}