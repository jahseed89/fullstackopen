import React from 'react'

const StatisticLine = ({text, value}) => {
  return (
    // <div>
    //     {text} {value}
    // </div>
    <table>
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    </table>
  )
}

export default StatisticLine