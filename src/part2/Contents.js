import React from 'react'
import Parts from './Parts'

const Contents = ({parts}) => {
    const part1 = parts[0]
    const part2 = parts[1]
    const part3 = parts[2]
    
  return (
    <>
        <Parts name={part1.name} exercises={part1.exercises} />
        <Parts name={part2.name} exercises={part2.exercises} />
        <Parts name={part3.name} exercises={part3.exercises} />
    </>
  )
}

export default Contents