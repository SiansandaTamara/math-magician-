import React from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
