import React from "react";
import "../css/Title.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Title() {
  return (
    <div className="title">
      <h1>Lexagram</h1>
      <p>Upload your own image with a caption!</p>
      <br />
      <button className="addButton">
        <AiOutlinePlusCircle size={30} />
      </button>
      <h2>Gallery</h2>
    </div>
  );
}

export default Title;
