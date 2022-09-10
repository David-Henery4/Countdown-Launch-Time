import React from "react";

const Tab = ({ num, name }) => {
  //
  const addFlip = () => {
    //
    const upper = document.querySelector(".countdown-upper");
    upper.classList.add("flip");
    const downer = document.querySelector(".countdown-downer");
    downer.classList.add("flip-down");
  };
  // addFlip()
  return (
    <div className="countdown-tab">
      <div className="countdown-upper">
        <p className="countdown-tab__num countdown-upper__num">{num}</p>
      </div>
      <div className="countdown-downer">
        <p className="countdown-tab__num countdown-downer__num">{num}</p>
      </div>
      <p className="countdown-tab__names">{name}</p>
    </div>
  );
};;

export default Tab;
