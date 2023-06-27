function App() {
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  // header component
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  // Parts component
  const Parts = (props) => {
    return (
      <p>
        {props.parts} {props.exercises}
      </p>
    );
  };

  // contents component
  const Contents = () => {
    return (
      <>
        <Parts parts={part1.name} exercises={part1.exercises} />
        <Parts parts={part2.name} exercises={part2.exercises} />
        <Parts parts={part3.name} exercises={part3.exercises} />
      </>
    );
  };

  // total component
  const Total = (props) => {
    const {exercises1, exercises2, exercises3} = props
    return (
      <p>
        The Number of exercises 
         {exercises1 + exercises2 + exercises3}
      </p>
    );
  };

  // Rendering all componts
  return (
    <div>
      <Header course={course} />
      <Contents />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  );
}

export default App;
