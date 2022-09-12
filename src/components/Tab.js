import React from "react";
import { useState, useEffect } from "react";


const Tab = ({ num, name }) => {
  const[isFlip, setIsFlip] = useState(false)
  //
  const addFlip = () => {
    setIsFlip(true)
  };
  //
  useEffect(() => {
    addFlip()
  }, [num])
  //
  return (
    <div className="countdown-tab">
      <div className="countdown-upper">
        <p className="countdown-tab__num countdown-upper__num">{num && String(num).padStart(2, "0")}</p>
      </div>
      <div
        className={
          isFlip ? "countdown-upper-flip flip-top" : "countdown-upper-flip"
        }
      >
        <p className="countdown-tab__num countdown-upper__num">{num && String(num).padStart(2, "0")}</p>
      </div>
      <div className="countdown-downer">
        <p className="countdown-tab__num countdown-downer__num">{num && String(num).padStart(2, "0")}</p>
      </div>
      <div
        className={
          isFlip ? "countdown-downer-flip flip-bottom" : "countdown-downer-flip"
        }
        onAnimationEnd={() => {
          setIsFlip(false)
        }}
      >
      </div>
      <p className="countdown-tab__names">{name}</p>
    </div>
  );
};;

export default Tab;
