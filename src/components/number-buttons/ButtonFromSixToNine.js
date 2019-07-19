import React from 'react';

const ButtonFromSixToNine = (props) => {
  return(
    <button 
      onClick={props.click} 
      className={props.class}>
      <span>{props.number}</span>
    </button>
  )
}

export default ButtonFromSixToNine;