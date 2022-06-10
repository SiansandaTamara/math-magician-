import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calcu from './Components/Calculator';

import Home from './Components/Home';
import Quote from './Components/Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <>

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calcu />} />
            <Route path="Quotes" element={<Quote />} />
          </Routes>

        </div>
      </>
    );
  }
}

export default App;
