import React, { useState } from 'react';
import Header from './component/header';
import './App.css';
import TodoForm from './component/body/TodoForm';
import TodoList from './component/body/TodoList';
import { v4 as uuid, v4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Play",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Play Cricket",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Play Chess",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Hello World",
      isCompleted: true,
    },
  ]);

  // Add a to-do
  const addTodo = (text) => {
    const newTodo = {
      id: v4(),
      title: text,
      isCompleted: false
    };
  };

  // Checks completed tasks
  const checkTodo = (id) => {
    console.log(id);
    setTodos(todos.map((todo) => {
      if(todo.id === id) todo.isCompleted = !todo.isCompleted;
      console.log(todo.isCompleted);
      return todo;
    }));
  }

  
  // Removes tasks 
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
    <div className="App">
      <Header/>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}



export default App;



