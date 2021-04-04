import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import './App.css';

/**
 * Main component that holds functions and displays other components
 * @returns JSX code for rendering app
 */
function App() {
  const dispatch = useDispatch();

  /**
   * Adds todo using data
   * @param {Object{string}} data 
   */
  const addTodo = data => {
    dispatch({ type: "ADD", payload: { ...data, id: uuid() } });
  };

  /**
   * Deletes the todo with the button that was clicked on
   * @param {Object{any}} evt 
   */
  const deleteTodo = evt => {
    const { id } = evt.target.parentElement;
    dispatch({ type: "DELETE", id })
  };

  return (
    <div className="App">
      <AddTodoForm addTodo={ addTodo } />
      <TodoList deleteTodo={ evt => deleteTodo(evt) } />
    </div>
  );
}

export default App;
