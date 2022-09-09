import React, { useEffect, useState } from "react";
import {Tab} from "../components";
import getCountdownData from "../count-data/countdownData";
 
const Countdown = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(2023, 8, 9));
  const [countdownData, setCountdownData] = useState({})
  //
  const updateClock = () => {
    setCurrentDate(new Date());
    const data = getCountdownData(endDate);
    setCountdownData(data);
  }
  //
  const addFlip = () => {
    const upper = document.querySelector(".countdown-upper")
    upper.classList.add("countdown-upper-flip");
  }
  // addFlip()
  //
  useEffect(() => {
    // updateClock()
    const secs = setTimeout(updateClock, [1000])
    return () => clearTimeout(secs)
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
