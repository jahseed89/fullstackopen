import React from 'react'

const Notifier = ({notifier}) => {
    if(notifier === null) {
        return null
    }
  return (
    <div>{notifier}</div>
  )
}

export default Notifier