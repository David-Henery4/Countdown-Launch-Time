import React, { useEffect, useState } from "react";
import {Tab} from "../components";
import getCountdownData from "../count-data/countdownData";
 
const Countdown = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(2022, 11, 19));
  const [countdownData, setCountdownData] = useState({})
  //
  const updateClock = () => {
    setCurrentDate(new Date());
    const data = getCountdownData(endDate);
    setCountdownData(data);
  }
  //
  useEffect(() => {
    const secs = setTimeout(updateClock, [1000]);
    return () => clearTimeout(secs);
    // eslint-disable-next-line
  }, [currentDate])
  //
  return (
    <div className="countdown">
      <Tab num={countdownData.daysUntill} name={"days"} />
      <Tab num={countdownData.hoursUntill} name={"hours"} />
      <Tab num={countdownData.minsUntill} name={"minutes"} />
      <Tab num={countdownData.secsUntill} name={"seconds"} />
    </div>
  );
};

export default Countdown;
