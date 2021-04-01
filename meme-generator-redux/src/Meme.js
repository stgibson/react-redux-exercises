import React from "react";
import "./Meme.css";

/**
 * Component for displaying a meme
 * @param {Object{Object{string}}|function} param0 
 * @returns JSX code for rendering a meme
 */
const Meme = ({ meme, deleteMeme }) => {
  return (
    <div id={ meme.id } className="Meme">
      <img src={ meme.image } alt="" />
      <div className="Meme-top">{ meme.topText }</div>
      <div className="Meme-bottom">{ meme.bottomText }</div>
      <button className="Meme-button" onClick={ deleteMeme }>X</button>
    </div>
  );
};

export default Meme;