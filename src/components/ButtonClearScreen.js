import React from 'react';

const ButtonClearScreen = (props) => {
  return(
    <button 
      onClick={props.click}>
      <span>C</span>
    </button>
  )
}

export default ButtonClearScreen;