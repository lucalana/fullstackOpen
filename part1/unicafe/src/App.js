import { useState } from 'react'

const Botao = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StaticLine = ({text, value}) => {
  return <>
      <tr>
          <td>{text}</td>
          <td> {value}</td>
        </tr>
  </>
}
const Statics = ({ good, bad, neutral }) => { 
  return <>
    <StaticLine text="all" value={bad + good + neutral}/>
      <StaticLine text="average" value={(bad + good + neutral)/3}/>
      <StaticLine text="positive" value={(good/(bad + good + neutral))*100}/>
  </>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return <>
  <h2>give feedback</h2>
  <Botao text="GOOD" onClick={() => setGood(good + 1)}/>
  <Botao text="NEUTRAL" onClick={() => setNeutral(neutral + 1)}/>
  <Botao text="BAD" onClick={() => setBad(bad + 1)}/>
      <h2>Statistics</h2>
      <table>
        <tbody>
            <tr>
              <td>good</td>
              <td> {good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td> {neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td> {bad}</td>
            </tr>
          <Statics good={good} neutral={neutral} bad={bad}/>
        </tbody>
      </table>
  </> 
}

export default App