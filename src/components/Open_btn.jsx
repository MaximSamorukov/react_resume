import react from "react";
import { icons } from "../icons";

const OpenBtn = ({ className, onClick, type }) => {

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {icons[type]}
    </button>
  );
};

export { OpenBtn };
