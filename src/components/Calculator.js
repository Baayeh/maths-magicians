import React from 'react';
import { buttons, operators } from './Buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="calcWrapper">
        <div id="results">
          <span>0</span>
        </div>

        <div id="button-container">
          <div className="numbers">
            {buttons.map(button => (
              <button type="button" key={button.name} className="btn">
                {button.value}
              </button>
            ))}
            <button type="button" className="btn btn-zero">
              0
            </button>
            <button type="button" className="btn">
              .
            </button>
          </div>
          <div className="operators">
            {operators.map(operator => (
              <button type="button" key={operator.name} className="btn">
                {operator.value}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
