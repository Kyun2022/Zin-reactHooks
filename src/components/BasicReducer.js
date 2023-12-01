import React, { useReducer } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const BasicReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const onClickAdd1 = () => dispatch("add_1");
  const onClickAdd3 = () => dispatch("multiple_3");
  const onClickReset = () => dispatch("reset");

  return (
    <div>
      <div className="">Count {count}</div>
      <button onClick={onClickAdd1}>Add + 1</button>
      <button onClick={onClickAdd3}>Multiple * 3</button>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
};

export default BasicReducer;
