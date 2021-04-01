import React from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";
import "./MemeList.css";

/**
 * Component for displaying list of memes
 * @param {Object{function}} param0 
 * @returns JSX code for rendering list of memes
 */
const MemeList = ({ deleteMeme }) => {
  const memes = useSelector(store => store.memes);

  return (
    <div className="MemeList">
      { memes.map(meme => <Meme meme={ meme } deleteMeme={ deleteMeme } />) }
    </div>
  );
};

export default MemeList;