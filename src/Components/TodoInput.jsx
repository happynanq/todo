import React, { useState } from 'react';

const TodoInput = (props)=>{
  const [text, setText] = useState("")
  

  const keyHandler = (e)=>{
    if(e.key === "Enter"){

      const newTodo= {
        text, id:Math.random(), completed:false
      }
      setText("")

      let array = props.todos ? props.todos.map(e=>e) : []
      array.push(newTodo)
      localStorage.setItem("UserTodos", JSON.stringify(array))
      props.setTodos(array)
    }
  }
  const changeHandler = (e) =>{
    // console.log(e.target.value);
    setText(e.target.value)
  }
  return(
    // <div className="row center">
      <div className="input-field col s6 center">
        <input id="todoInput" type="text" class="validate" onKeyDown={keyHandler} onChange={changeHandler} value={text}  />
        {/* <label for="todoInput">Todo</label> */}
      </div>
    // </div>
  )
}
export default TodoInput