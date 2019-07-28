import React from 'react';

const ButtonResult = (props) => {
  return(
    <button className="btn-result" 
      onClick={props.click}>
      <span>
        =
      </span>
    </button>
  )
}

export default ButtonResult;