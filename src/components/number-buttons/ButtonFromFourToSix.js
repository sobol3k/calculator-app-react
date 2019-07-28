import React from 'react';

const ButtonFromFourToSix = (props) => {
  return(
    <button
      key={props.id}
      onClick={props.click} 
      className={props.class}>
      <span>
        {props.number}
      </span>
    </button>
  )
}

export default ButtonFromFourToSix;