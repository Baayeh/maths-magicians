import React from 'react';

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
      </section>
    );
  }
}

export default Calculator;
