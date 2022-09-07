import React from "react";

const Tab = ({ num, name }) => {
  return (
    <div className="countdown-tab">
      <p>{num}</p>
      <p className="countdown-tab__names">
      {name}
      </p>
    </div>
  );
};

export default Tab;
