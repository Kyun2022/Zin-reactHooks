import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const time = () => {
    setCount((prev) => ++prev);
  };

  useEffect(() => {
    const interval = setInterval(time, 1000);
    return () => {
      clearInterval(interval);
      console.log("cleared");
    };
  }, []);

  return <div>{count}</div>;
};

export default Timer;
