import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { Space } from "antd";
import { data } from "../data/data";
import { icons } from "../icons";

const Profiles = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {data[language].profiles.map(
        ({ label, target, download, name, url }, index, arr) => {
          return (
            <>
              <div key={name} className="item">
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  download={download}
                  target={target}
                  href={url}
                >
                  <Space>
                    <span>{icons[name]}</span>
                    <span>{label}</span>
                  </Space>
                </a>
              </div>
              {arr.length > index + 1 && (
                <div
                  style={{
                    width: 20,
                    textAlign: "center",
                  }}
                >
                  |
                </div>
              )}
            </>
          );
        }
      )}
    </div>
  );
};

export { Profiles };
