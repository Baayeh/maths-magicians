import React, { useState } from "react";
import Button from "./Button";
import keys from "./Keys";
import calculate from '../logic/calculate'

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null
  });

  const handleClick = (btn) => {
    setState(prevState => calculate(prevState, btn));
  }
 
  const { total, next } = state;
  let result = 0;
  if (total === null && next !== null) {
    result = next;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  return (
    <div className="flex justify-around">
      <div>
        Some text
      </div>
      <div id="calculator">
        <section className="result-pane">{result}</section>
        <section className="keys-container">
          {
            keys.map(key => (
              <Button key={key.label} label={key.label} action={handleClick} />
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default Calculator