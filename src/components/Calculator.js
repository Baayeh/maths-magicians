import React from 'react';
import { buttons, operators } from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
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
              onClick={this.handleCalculation}
            >
              {button.value}
            </button>
          ))}
          <button
            type="button"
            className="btn btn-zero"
            onClick={this.handleCalculation}
          >
            0
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.handleCalculation}
          >
            .
          </button>
        </div>
        <div className="operators">
          {operators.map(operator => (
            <button
              type="button"
              key={operator.name}
              className="btn"
              onClick={this.handleCalculation}
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

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//     };

//     this.handleCalculation = this.handleCalculation.bind(this);
//   }

//   handleCalculation = e => {
//     this.setState(state => calculate(state, e.target.innerText));
//   };

//   render() {
//     const { total, next } = this.state;
//     let outcome = 0;

//     if (total === null && next !== null) {
//       outcome = next;
//     } else if (total !== null && next === null) {
//       outcome = total;
//     } else {
//       outcome = next;
//     }

//     return (
//       <section id="calcWrapper">
//         <div id="outcome">
//           <span>{outcome}</span>
//         </div>

//         <div id="button-container">
//           <div className="numbers">
//             {buttons.map(button => (
//               <button
//                 type="button"
//                 key={button.name}
//                 className="btn"
//                 onClick={this.handleCalculation}
//               >
//                 {button.value}
//               </button>
//             ))}
//             <button
//               type="button"
//               className="btn btn-zero"
//               onClick={this.handleCalculation}
//             >
//               0
//             </button>
//             <button
//               type="button"
//               className="btn"
//               onClick={this.handleCalculation}
//             >
//               .
//             </button>
//           </div>
//           <div className="operators">
//             {operators.map(operator => (
//               <button
//                 type="button"
//                 key={operator.name}
//                 className="btn"
//                 onClick={this.handleCalculation}
//               >
//                 {operator.value}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Calculator;
