import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import Option from './Option';

const Todo = ()=>{
  const [todos,setTodos] = useState("")
  const [mode, setMode] = useState('')
  window.todos= todos

  useEffect(() => {
    // setTodos((localStorage.getItem("UserTodos")))
    let a = JSON.parse(localStorage.getItem("UserTodos"))
    setTodos(a)
  }, []);

  const deleteTodo = (id)=>{
    let a = todos.filter(e=>{
      if(e.id !== id){
        return true
      }
      else{
        return false
      }
    })
    debugger
    localStorage.setItem("UserTodos", JSON.stringify(a) )
    setTodos(a || '')
  }
  const completeTodo = (id)=>{
    let a = todos.map(e=>{
      debugger
      if(e.id !== id){
        return e
      }
      else{
        return {...e, completed:!e.completed}
      }
    })
    debugger
    localStorage.setItem("UserTodos", JSON.stringify(a) )
    setTodos(a || '')
  }
  const hhandle = (v)=>{
    setTodos(v)
  }
  return(
    <div>
      <div className="inputField">
        <TodoInput todos={todos} setTodos={hhandle}/>
      </div>
      <div className="todoList">
        {todos ? todos.map(e=><TodoList text={e.text} 
        completed={e.completed} 
        deleteTodo={deleteTodo} 
        id={e.id}  key={e.id}
        completeTodo={completeTodo}
        /> )
        : ""}
      </div>
      <div className="ChangeOption">
          <Option mode={mode} setMode={setMode}/>
      </div>
    </div>
  )
}
export default Todo