import React from 'react';

const ButtonZeroNumber = (props) => {
  return(
    <button 
      onClick={props.click} 
      className="border-left">
      <span>0</span>
    </button>
  )
}

export default ButtonZeroNumber;