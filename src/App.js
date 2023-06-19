import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input === '') 
    return;
    const newTodo = { id: Date.now(), input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h1>Seznam úkolů</h1>
      <div className='input-form'>
        <input
          type="text"
          placeholder='Přidat nový úkol...'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className='add-button' onClick={addTodo}>Přidat</button>
      </div>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.input}
            <button className='remove-button' onClick={() => removeTodo(todo.id)}>Smazat</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;