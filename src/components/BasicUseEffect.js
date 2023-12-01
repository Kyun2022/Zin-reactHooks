import React, { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const prevCount = () => {
    setCount((prev) => ++prev);
  };

  const onChangeSetItem = (evt) => {
    setItem(evt.target.value);
  };

  useEffect(() => {
    console.log("useEffect invoked");
  }, [count]);

  return (
    <div>
      <button onClick={prevCount}>Click : {count}</button>
      <input type="text" value={item} onChange={onChangeSetItem} />
    </div>
  );
};

export default BasicUseEffect;
