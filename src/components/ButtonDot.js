import React from 'react';

const ButtonDot = (props) => {
  return(
    <button 
      onClick={props.click}>
      <span>
        .
      </span>
    </button>
  )
}

export default ButtonDot;
