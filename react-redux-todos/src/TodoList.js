import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import "./TodoList.css";

/**
 * Component for displaying list of todos
 * @param {Object{function}} param0 
 * @returns JSX code for rendering list of todos
 */
const TodoList = ({ deleteTodo }) => {
  const todos = useSelector(store => store.todos);

  return (
    <ul className="TodoList">
      {
        todos.map(todo => (
          <li key={ uuid() }>
            <Todo todo={ todo } deleteTodo={ deleteTodo } />
          </li>
        ))
      }
    </ul>
  );
};

export default TodoList;