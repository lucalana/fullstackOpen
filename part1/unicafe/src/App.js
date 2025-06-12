import { useState } from 'react'

const Botao = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Statics = ({ good, bad, neutral }) => {

  if (good == 0 && bad == 0 && neutral == 0) {
    return <>
      <h2>no feedback given</h2>
    </>
  }

  return <>
      <h2>Statics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {bad + good + neutral}</div>
      <div>average {(bad + good + neutral)/3}</div>
      <div>possitve {(good/(bad + good + neutral))*100} %</div>
  </> 
}

const App = () => {
  const [good, addGood] = useState(0)
  const [neutral, addNeutra] = useState(0)
  const [bad, addBad] = useState(0)



  return (
    <div>
      <h1>Give feedback</h1>

      <Botao onClick={() => addGood(good + 1)} text="good"/>
      <Botao onClick={() => addNeutra(neutral + 1)} text="neutral"/>
      <Botao onClick={() => addBad(bad + 1)} text="bad"/>

    <Statics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App