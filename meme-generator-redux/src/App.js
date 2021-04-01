import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import "./App.css";
import AddMemeForm from "./AddMemeForm";
import MemeList from "./MemeList";

/**
 * Main component that holds functions for manipulating memes and rendering
 * components
 * @returns JSX code for rendering app
 */
function App() {
  const dispatch = useDispatch();

  /**
   * Adds a meme using data
   * @param {Object{string}} data 
   */
  const addMeme = data => {
    dispatch({ type: "ADD", payload: { ...data, id: uuid() } });
  };

  /**
   * Deletes meme with the button that was clicked
   * @param {Object} evt 
   */
  const deleteMeme = evt => {
    const { id } = evt.target.parentElement;
    dispatch({ type: "DELETE", id });
  };

  return (
    <div className="App">
      <AddMemeForm addMeme={ addMeme } />
      <MemeList deleteMeme={ evt => deleteMeme(evt) }/>
    </div>
  );
}

export default App;
