// import Content from './part1/exercise1.3.-1.5/Content';
// import Header from './part1/exercise1.3.-1.5/Header';
// import Practies from './part1/exercise1.3.-1.5/Practies';
// import Total from './part1/exercise1.3.-1.5/Total';

import PhonebookApp from "./part2/PhonebookApp";

// import Contents from "./part2/Contents";
// import Header from "./part2/Header";

// import { useState } from "react";
// import Statistic from "./part1/exercise1.6.-1.14/Statistic";
// import Button from "./part1/exercise1.6.-1.14/Button";

// const anecdotes = [
//   'If it hurts, do it more often.',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//   'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//   'The only way to go fast, is to go well.',
//   'Everything easy with understanding',
//   'Foundamental right'
// ]

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
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  // anecdotes state function
  // const [selected, setSelected] = useState(0)

  // onclick on the good button funtion
  // const handleGood = () => {
  //   setGood(good + 1)
  // }

  // onclick on the neutral button function
  // const handleNeutral = () => {
  //   setNeutral(neutral + 1)
  // }

  // onclick on bad button funtion
  // const handleBad = () => {
  //   setBad(bad + 1)
  // }

// const nextCote = () => {
//   const randomNames = anecdotes[Math.floor(Math.random() * anecdotes.length)]  
//   console.log(anecdotes.length)
//   setSelected(randomNames)
// }


  // Rendering all componts
  // const course = {
  //   id: 1,
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //       id: 1
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //       id: 2
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //       id: 3
  //     }
  //   ]
  // }

  // const total = course.parts.reduce((sum, exe) => {
  //   return sum + exe.exercises
  // }, 0)



  return (
    <div>
      {/* <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
      {/* <div>
        <h1>give feedback</h1>
        <Button text="good" clickHandler={handleGood} />
        <Button text="neutral" clickHandler={handleNeutral} />
        <Button text="bad" clickHandler={handleBad} />
      </div> */}
      {/* <Statistic good={good} neutral={neutral} bad={bad} />
      <p>all {good + neutral + bad}</p> <br /> <br /> */}

    {/* <p>{selected}</p>
     <Button text="next anecdote" clickHandler={nextCote} /> */}
     {/* <Header course={course.name} />
     <Contents parts={course.parts} /> */}
     {/* <h3>The total exercises: {total}</h3> */}

     {/* <NoteIndex /> */}
     <PhonebookApp />
    </div>
  );
}

export default App;
