import React from 'react'

const Total = (props) => {
    const parts = props.parts

    const exercises1 = parts[0]
    const exercises2 = parts[1]
    const exercises3 = parts[2]

    return (
      <p>
        The Number of exercises 
         {exercises1.exercises + exercises2.exercises + exercises3.exercises}
      </p>
    );
}

export default Total