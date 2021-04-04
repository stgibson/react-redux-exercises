import React from "./Todo";
import "./Todo.css";

/**
 * Component for displaying a todo
 * @param {Object{Object{string}|function}} param0 
 * @returns JSX code for rendering a todo
 */
const Todo = ({ todo, deleteTodo }) => {
  return (
    <div id={ todo.id } className="Todo">
      { todo.todo }
      <button onClick={ deleteTodo }>X</button>
    </div>
  );
};

export default Todo;