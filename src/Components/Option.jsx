import React, { useEffect } from 'react';
const Option = (props)=>{
  useEffect(() => {
    
  }, [] );
  const handleClick = (e)=>{
    // debugger
    // e.currentTarget.classList.value =e.currentTarget.classList.value+ " active"
    console.log(e.currentTarget.classList);
    props.setMode(e.currentTarget.innerHTML);
  }
  return(
    <div className="center">
      <div className="row">
        <span className="filterOption wewe" onClick={handleClick}>all</span>
        <span className="filterOption wewe" onClick={handleClick}>active</span>
        <span className="filterOption we" onClick={handleClick}>completed</span>
      </div>
    </div>
  )
}
export default Option