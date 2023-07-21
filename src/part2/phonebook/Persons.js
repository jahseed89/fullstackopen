import React from 'react'

const Persons = ({id, name, number, handleDelete}) => {
  return (
    <div>
        <p>{name} <span>{number}</span> <button onClick={() => handleDelete(id)}>delete</button></p>
    </div>
  )
}

export default Persons