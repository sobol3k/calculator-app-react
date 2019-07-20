import React from 'react';

const ButtonFromSevenToNine = (props) => {
  return(
    <button 
      key={props.id}
      onClick={props.click} 
      className={props.class}>
      <span>{props.number}</span>
    </button>
  )
}

export default ButtonFromSevenToNine;