import React, { useState } from "react";
import "./AddMemeForm.css";

/**
 * Component for displaying a form for users to add a meme
 * @param {Object{function}} param0 
 * @returns JSX code for rendering the form
 */
const AddMemeForm = ({ addMeme }) => {
  const initFormData = { topText: "", bottomText: "", image: "" };
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
   * Prevents page from reloading and adds meme based on formData
   * @param {Object{any}} evt 
   */
  const handleSubmit = evt => {
    evt.preventDefault();
    addMeme(formData);
    setFormData(initFormData);
  };

  return (
    <form className="AddMemeForm" onSubmit={ handleSubmit }>
      <label htmlFor="topText">Top Text</label>
      <input
        id="topText"
        name="topText"
        type="text"
        onChange={ handleChange }
        value={ formData.topText }
      />
      <label htmlFor="bottomText">Bottom Text</label>
      <input
        id="bottomText"
        name="bottomText"
        type="text"
        onChange={ handleChange }
        value={ formData.bottomText }
      />
      <label htmlFor="image">Image Source</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={ handleChange }
        value={ formData.image }
      />
      <button type="submit">Add Meme</button>
    </form>
  );
};

export default AddMemeForm;