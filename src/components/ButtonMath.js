import React from 'react';

const ButtonMath = (props) => {
  return(
    <button 
      key={props.id}
      onClick={props.click} 
      className={props.class}>
      <span>
        {props.char}
      </span>
    </button>
  )
}

export default ButtonMath;
