import React, { useState } from "react";
import "../css/Title.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Form from "./Form.js";

function Title() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="title">
      <h1>Lexagram</h1>
      <p>Upload your own image with a caption!</p>
      <br />
      <button className="addButton" onClick={toggleForm}>
        <AiOutlinePlusCircle size={30} />
      </button>
      {showForm && <Form />}
      <h2>Gallery</h2>
    </div>
  );
}

export default Title;
