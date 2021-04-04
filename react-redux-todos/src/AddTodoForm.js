import React, { useState } from "react";
import "./AddTodoForm.css";

/**
 * Component for displaying form to add a new todo
 * @param {Object{function}} param0 
 * @returns JSX code for rendering add todo form
 */
const AddTodoForm = ({ addTodo }) => {
  const initFormData = { todo: "" };
  const [formData, setFormData] = useState(initFormData);

  /**
   * Updates formData when user types in input
   * @param {Object{any}} evt 
   */
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  /**
   * When user submits form, adds todo and resets inputs
   * @param {Object{any}} evt 
   */
  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(initFormData);
  };

  return (
    <form className="AddTodoForm" onSubmit={ handleSubmit }>
      <label htmlFor="todo">Todo:</label>
      <input
        id="todo"
        name="todo"
        type="text"
        onChange={ handleChange }
        value={ formData.todo }
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;