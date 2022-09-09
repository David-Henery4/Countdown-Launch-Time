import React from "react";

const Tab = ({ num, name }) => {
  return (
    <div className="countdown-tab">
      <div className="countdown-upper">
        <p className="countdown-tab__num">{num}</p>
      </div>
      <div className="countdown-downer">
        <p className="countdown-tab__num">{num}</p>
      </div>
      <p className="countdown-tab__names">{name}</p>
    </div>
  );
};

export default Tab;
