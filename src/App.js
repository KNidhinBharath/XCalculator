
import { useState } from 'react';
import './App.css';


function App() {

  const [display,setDisplay] = useState("")
  const [result,setResult] = useState("")

  function handleClick(value) {
    setDisplay((prev) => prev + value)
  }

  function handleCalculate() {
    try {
          const result = Function(`return (${display})`)()
          setResult(String(result))  
    } catch (error) {
          setResult("Error")
    }
    
  }

  function handleClear() {

    setDisplay("")
    setResult("")

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='calculator'>
            <h1>React Calculator</h1>
           <input type='text' value={display} readOnly/>

           {
            result && <div>
              <p>{result}</p>
           </div>
           }
           
           <div>
            <button className='btn' onClick={() => handleClick("7")}>7</button>
            <button className='btn' onClick={() => handleClick("8")}>8</button>
            <button className='btn'onClick={() => handleClick("9")}>9</button>
            <button className='btn'onClick={() => handleClick("+")}>+</button>
          </div>

          <div>
            <button className='btn'onClick={() => handleClick("4")}>4</button>
            <button className='btn'onClick={() => handleClick("5")}>5</button>
            <button className='btn'onClick={() => handleClick("6")}>6</button>
            <button className='btn'onClick={() => handleClick("-")}>-</button>
          </div>

           <div>
            <button className='btn'onClick={() => handleClick("1")}>1</button>
            <button className='btn'onClick={() => handleClick("2")}>2</button>
            <button className='btn'onClick={() => handleClick("3")}>3</button>
            <button className='btn'onClick={() => handleClick("*")}>*</button>
          </div>

           <div>
            <button className='btn'onClick={handleClear}>C</button>
            <button className='btn'onClick={() => handleClick("0")}>0</button>
            <button className='btn'onClick={handleCalculate}>=</button>
            <button className='btn'onClick={() => handleClick("/")}>/</button>
          </div>

        </div>
          

      </header>
    </div>
  );
}

export default App;
