import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [currentNumber, setCurrentNumber] = useState(1)

  const [output, setOutput] = useState("")

  const [text, setText] = useState('')

  const [textList, setTextList] = useState([])

  useEffect(() => {
    console.log('use effect triggered');
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      setOutput("fizzbuzz")
    } else if (currentNumber % 3 === 0) {
      setOutput("fizz")
    } else if (currentNumber % 5 === 0) {
      setOutput("buzz")
    } else {
      setOutput(currentNumber);
    }
  }, [currentNumber])


  const handleInc = () => {
    setCurrentNumber(currentNumber + 1)
  }

  const handleDec = () => {
    setCurrentNumber(currentNumber - 1)
  }

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const textToSubmit = text.trim();
    textList.push(textToSubmit)
    setText("");
    console.log(textList)
  }

  return (
    <>
      <h1>FizzBuzz</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleTextChange}></input>
        <input type='submit' value='Add Your Answer'></input>
      </form>
      <br></br>
      <button value={currentNumber} onClick={handleInc}>+</button>
      <button value={currentNumber} onClick={handleDec}>-</button>

      <h2>{textList}</h2>

      <h2>Number: {currentNumber}</h2>

      <h2>Answer: {output}</h2>
    </>

  );
}

export default App;
