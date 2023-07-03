import React from 'react'
import StatisticLine from './StatisticLine'

const Statistic = (props) => {
  return (
    <div>
        <h1>statistic</h1>
        {/* <p>good {props.good} </p>
        <p>neutral {props.neutral} </p>
        <p>bad {props.bad} </p> */}

        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="nutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />


    </div>
  )
}

export default Statistic