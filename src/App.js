import Content from "./part1/Content";
import Header from "./part1/Header";
import Total from "./part1/Total";

function App() {
  const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  // const part1 = {
  //   name: "Fundamentals of React",
  //   exercises: 10,
  // };
  // const part2 = {
  //   name: "Using props to pass data",
  //   exercises: 7,
  // };
  // const part3 = {
  //   name: "State of a component",
  //   exercises: 14,
  // };


  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  // Rendering all componts
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
     
    </div>
  );
}

export default App;
