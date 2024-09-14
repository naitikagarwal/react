import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(15)

    const addValue = () => {
  setCount(counter+1)
}
    const removeValue = () => {
  setCount(counter-1)
}
  return (
    <>
    <h1>React Course</h1>
  <h2>Counter value : {counter}</h2>
  <button onClick={addValue}>Add Value</button>
  <button onClick={removeValue}>Remove Value</button>
  <p>footer:{counter}</p>
    </>
  )
}

export default App
