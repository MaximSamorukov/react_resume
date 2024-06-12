import react from "react";
import { icons } from "../icons";

const OpenBtn = ({ className, onClick, type, theme }) => {
  
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {icons[theme][type]}
    </button>
  );
};

export { OpenBtn };
