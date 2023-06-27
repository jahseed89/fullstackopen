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

  // header component
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };


  // Parts component
  const Parts = (props) => {
    const {part, exercises} = props
    return (
      <p>
        {part} {exercises}
      </p>
    );
  };

  // contents component
  const Contents = () => {
    return (
      <>
        <Parts part={parts[0].name} exercises={parts[0].exercises} />
        <Parts part={parts[1].name} exercises={parts[1].exercises} />
        <Parts part={parts[2].name} exercises={parts[2].exercises} />

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
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
     
    </div>
  );
}

export default App;
