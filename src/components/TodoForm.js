import React,{ useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => { 
      e.preventDefault();
      if(value === '')return;
      addTodo(value);
      setValue('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Přidat do seznamu..."
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        <button className="btn-add" type="submit">+</button>
      </form>
    );
  };

export default TodoForm
