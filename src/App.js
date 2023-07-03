// import Content from './part1/exercise1.3.-1.5/Content';
// import Header from './part1/exercise1.3.-1.5/Header';
// import Practies from './part1/exercise1.3.-1.5/Practies';
// import Total from './part1/exercise1.3.-1.5/Total';

import { useState } from "react";
import Statistic from "./part1/exercise1.6.-1.14/Statistic";

function App() {
 
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14
  //     }
  //   ]
  // }

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // onclick on the good button funtion
  const handleGood = () => {
    setGood(good + 1)
  }

  // onclick on the neutral button function
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  // onclick on bad button funtion
  const handleBad = () => {
    setBad(bad + 1)
  }


  // Rendering all componts
  return (
    <div>
      {/* <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>

      </div>
      <Statistic good={good} neutral={neutral} bad={bad} />
      <p>all {good + neutral + bad}</p>

    </div>
  );
}

export default App;
