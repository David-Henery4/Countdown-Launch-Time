import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Tab = ({ num, name }) => {
  const[isFlip, setIsFlip] = useState(false)
  //
  const addFlip = () => {
    setIsFlip(true)
  };
  //
  useEffect(() => {
    addFlip()
    // console.log("change")
  }, [num])
  //
  return (
    <div className="countdown-tab">
      <div className="countdown-upper">
        <p className="countdown-tab__num countdown-upper__num">{num}</p>
      </div>
      <div
        className={
          isFlip ? "countdown-upper-flip flip-top" : "countdown-upper-flip"
        }
      >
        <p className="countdown-tab__num countdown-upper__num">{num}</p>
      </div>
      {/* <p className="countdown-tab__num number-middle">{num}</p> */}
      <div className="countdown-downer">
        <p className="countdown-tab__num countdown-downer__num">{num}</p>
      </div>
      <div
        className={
          isFlip ? "countdown-downer-flip flip-bottom" : "countdown-downer-flip"
        }
        onAnimationEnd={() => {
          setIsFlip(false)
        }}
      >
        {/* <p className="countdown-tab__num countdown-downer__num">
        </p> */}
      </div>
      <p className="countdown-tab__names">{name}</p>
    </div>
  );
};;

export default Tab;
