import React from 'react'

const ButtonExample = ({onclick, label}) => {
  return (
    <button onClick={onclick}>{label}</button>
  )
}

export default ButtonExample


