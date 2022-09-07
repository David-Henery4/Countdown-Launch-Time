import React from "react";
import {Tab} from "../components";
 
const Countdown = () => {
  const tempNum = "08";
  return (
    <div className="countdown">
      <Tab num={tempNum} name={"days"} />
      <Tab num={23} name={"hours"} />
      <Tab num={55} name={"minutes"} />
      <Tab num={41} name={"seconds"} />
    </div>
  );
};

export default Countdown;
