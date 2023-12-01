import React, { useState } from "react";
import Timer from "./Timer";

const TimerContainer = () => {
  const [display, setDisplay] = useState(true);

  const onClickDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={onClickDisplay}>Switch Timer</button>
      {display && <Timer />}
    </div>
  );
};

export default TimerContainer;
