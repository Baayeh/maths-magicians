/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Button from "./Button";
import keys from "./Keys";
import calculate from '../logic/calculate'

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0
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
    <div className="mt-20 block md:flex justify-around items-center">
      <div className="hidden md:block">
        <h2 className="text-4xl lg:text-6xl">Let's do some <br /> <span className="relative before:w-full before:h-1 before:bg-secondary before:absolute before:bottom-0">Maths!!</span></h2>
      </div>
      <div id="calculator" className="max-w-[25rem] mx-auto md:mx-0 md:w-[28rem]">
        <section className="result-pane font-extrabold">{result}</section>
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