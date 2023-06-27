
function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

// header component
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  // Parts component
  const Parts = (props) => {
    return (
      <p>{props.parts} {props.exercises}</p>
    )
  }
  
  // contents component
  const Contents = () => {
    
    return (
      <>
        <Parts parts={part1} exercises={exercises1} />
        <Parts parts={part2} exercises={exercises2} />
        <Parts parts={part3} exercises={exercises3} />
      </>
    );
  };

  // total component
  const Total = (props) => {
    return (
      <p>The Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
  }
  
  // Rendering all componts
  return (
    <div>
      <Header course={course} />
      <Contents />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
}

export default App;
