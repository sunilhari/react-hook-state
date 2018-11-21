import React from "react";
import { connect } from "../../store";
import "./Counter.css";

const Counter = props => {
  const inc = () => props.dispatch({ type: "INC" });
  const dec = () => props.dispatch({ type: "DEC" });

  return (
    <div className="counter">
      <button onClick={dec} className="dec">
        Decrement
      </button>
      <span className="count">{props.count}</span>
      <button onClick={inc} className="inc">
        Increment
      </button>
    </div>
  );
};

export default connect(Counter);
