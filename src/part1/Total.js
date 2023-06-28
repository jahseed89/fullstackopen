import React from 'react'

const Total = (props) => {
    const part = props.parts
    return (
      <p>
        The Number of exercises 
         {part[0].exercises + part[1].exercises + part[2].exercises}
      </p>
    );
}

export default Total