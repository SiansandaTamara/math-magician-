import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="wrapper">
        <div className="screen">0</div>
        <div className="btn light-gray">AC</div>
        <div className="btn light-gray">%</div>
        <div className="btn light-gray">+/-</div>
        <div className="btn orange">/</div>
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn orange">x</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn orange">+</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn orange">-</div>
        <div className="btn op">0</div>
        <div className="btn">.</div>
        <div className="btn orange">=</div>

      </div>

    );
  }
}

export default Calculator;
