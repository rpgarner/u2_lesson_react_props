import React from 'react'

function Button(props) {
  console.log(props)
  return <button onClick={props.handleClick}>{ props.text }</button>
}

export default Button
