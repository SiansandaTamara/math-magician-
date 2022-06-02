import './App.css';
import {useState, useEffect } from 'react'

function App() {
  
const [prestate, setprestate ] = useState("")
const [curstate, setcurstate ] = useState("")
const [input, setinput ] = useState("0")
const [opereator, setoperator ] = useState("null")
const [total, setTotal ] = useState("false")

const inputNum = (e) => {};

const operatorType = (e) => {};

const equals = (e) => {};

const minusPlus = (e) => {};

const percent = (e) => {};

const reset = (e) => {};

  return (
    <div className="container">
      <div className='wrapper'>
        <div className='screen'>0</div>
          <div className='btn light-gray' onClick="reset">AC</div>
          <div className='btn light-gray' onClick="percent">%</div>
          <div className='btn light-gray' onClick="minusPlus">+/-</div>
          <div className='btn orange' onClick="operatorType">/</div>
          <div className='btn' onClick="inputNum">7</div>
          <div className='btn' onClick="inputNum">8</div>
          <div className='btn' onClick="inputNum">9</div>
          <div className='btn orange' onClick="operatorType">x</div>
          <div className='btn' onClick="inputNum">4</div>
          <div className='btn' onClick="inputNum">5</div>
          <div className='btn' onClick="inputNum">6</div>
          <div className='btn orange' onClick="operatorType">+</div>
          <div className='btn' onClick="inputNum">1</div>
          <div className='btn' onClick="inputNum">2</div>
          <div className='btn' onClick="inputNum">3</div>
          <div className='btn orange' onClick="operatorType">-</div>
          <div className='btn op' onClick="inputNum">0</div>
          <div className='btn' onClick="inputNum">.</div>
          <div className='btn orange' onClick="equals">=</div>
        
      </div>
       </div>
  );
}

export default App;
