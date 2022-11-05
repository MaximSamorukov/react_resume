import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper-outer">
      <div className="wrapper-inner">{children}</div>
    </div>
  );
};

export { Wrapper };
