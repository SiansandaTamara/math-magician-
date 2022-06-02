import React from 'react';
import Keys from './operator';
import calculate from '../logic/Calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

componentDidMount = () => {
  this.setState({
    total: 0,
    next: null,
    operation: null,
  });
}

render() {
  const handleEvent = (e) => {
    const oprObject = calculate(this.state, e.target.textContent);
    this.setState(oprObject);
  };

  const { total, operation, next } = this.state;
  const oprnd = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${oprnd || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${oprnd || ''}`;
  }
  return (
    <div className="wrapper">
      <div className="screen">{result || 0}</div>
      <Keys styles="btn light-gray" handleEvent={(e) => handleEvent(e)} val="AC" />
      <Keys styles="btn light-gray" handleEvent={(e) => handleEvent(e)} val="%" />
      <Keys styles="btn light-gray" handleEvent={(e) => handleEvent(e)} val="+/-" />
      <Keys styles="btn orange" handleEvent={(e) => handleEvent(e)} val="+" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="7" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="8" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="9" />
      <Keys styles="btn orange" handleEvent={(e) => handleEvent(e)} val="x" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="4" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="5" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="6" />
      <Keys styles="btn orange" handleEvent={(e) => handleEvent(e)} val="+" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="1" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="2" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="3" />
      <Keys styles="btn orange" handleEvent={(e) => handleEvent(e)} val="-" />
      <Keys styles="btn op" handleEvent={(e) => handleEvent(e)} val="0" />
      <Keys styles="btn" handleEvent={(e) => handleEvent(e)} val="." />
      <Keys styles="btn orange" handleEvent={(e) => handleEvent(e)} val="=" />

    </div>
  );
}
}

export default Calculator;
