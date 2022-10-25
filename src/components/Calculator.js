import React, { useState } from 'react';
import { buttons, operators } from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
  });

  const handleCalculation = e => {
    setState(state => calculate(state, e.target.innerText));
  };

  let outcome = 0;

  if (state.total === null && state.next !== null) {
    outcome = state.next;
  } else if (state.total !== null && state.next === null) {
    outcome = state.total;
  } else {
    outcome = state.next;
  }

  return (
    <section id="calcWrapper">
      <div id="outcome">
        <span>{outcome}</span>
      </div>

      <div id="button-container">
        <div className="numbers">
          {buttons.map(button => (
            <button
              type="button"
              key={button.name}
              className="btn"
              onClick={handleCalculation}
            >
              {button.value}
            </button>
          ))}
          <button
            type="button"
            className="btn btn-zero"
            onClick={handleCalculation}
          >
            0
          </button>
          <button type="button" className="btn" onClick={handleCalculation}>
            .
          </button>
        </div>
        <div className="operators">
          {operators.map(operator => (
            <button
              type="button"
              key={operator.name}
              className="btn"
              onClick={handleCalculation}
            >
              {operator.value}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
