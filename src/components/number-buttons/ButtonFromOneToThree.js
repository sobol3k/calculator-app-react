import React from 'react';

const ButtonFromOneToThree = (props) => {
  return(
    <button
      onClick={props.click} 
      className={props.class}>
      <span>{props.number}</span>
    </button>
  ) 
}

export default ButtonFromOneToThree;