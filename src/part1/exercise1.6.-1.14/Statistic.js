import React from 'react'

const Statistic = (props) => {
  return (
    <div>
        <h1>statistic</h1>
        <p>good {props.good} </p>
        <p>neutral {props.neutral} </p>
        <p>bad {props.bad} </p>
    </div>
  )
}

export default Statistic