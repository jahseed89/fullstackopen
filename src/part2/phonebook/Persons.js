import React from 'react'

const Persons = ({name, number}) => {
  return (
    <div>
        <p>{name} <span>{number}</span></p>
    </div>
  )
}

export default Persons