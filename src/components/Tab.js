import React from "react";

const Tab = ({ num, name }) => {
  return (
    <div className="countdown-tab">
      <p className="countdown-tab__num">{num}</p>
      <p className="countdown-tab__names">
      {name}
      </p>
    </div>
  );
};

export default Tab;
