import React from 'react';

const TodoList = (props)=>{
  // let id = 
  const deleteTodo = (e)=>{
    props.deleteTodo(props.id)
  }
  const completeTodo = ()=>{
    props.completeTodo(props.id)
  }
  return(
    <div class="collection">
      <div href="#" class="collection-item">
        <span class="badge"> 
          <button className="btn" onClick={deleteTodo}> X </button> 
        </span> 
        <label>
        {
          props.completed ? 
          <input type="checkbox" onChange={completeTodo} checked /> : 
          <input type="checkbox" onChange={completeTodo}  
        />}
          
          <span>{props.text}</span>
        </label>
        
      </div>
  </div>
  )
}
export default TodoList