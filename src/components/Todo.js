import React from 'react'

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div>
         <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <p>{todo.text}</p>
      <div>
        <button className="btn-complete" onClick={() => completeTodo(index)}>Done</button>
        <button className="btn-remove" onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
    </div>
  )
}

export default Todo