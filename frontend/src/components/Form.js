import React, { useState } from "react";
import "../css/Form.css";
import { Button, Paper, TextField } from "@material-ui/core";
import Upload from "../hooks/upload.js";

function Form() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [postImage, setPostImage] = useState(null);
  let post = { image: image, caption: caption };

  const [imageExists, setImageExists] = useState(false);
  const fileTypes = ["image/png", "image/pdf"];

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };

  const handleImageChange = (event) => {
    let imageChange = event.target.files[0];

    if (imageChange && fileTypes.includes(imageChange.type)) {
      setImage(imageChange);
      setError("");
      setImageExists(true);
    } else {
      setError("Please upload file in PNG or JPEG format!");
      setImage(null);
    }
  };

  return (
    <div className="form_container">
      <br />
      <form className="form" onSubmit={handleUpload}>
        <Button variant="outlined" component="label">
          Upload Image
          <input required type="file" onChange={(e) => handleImageChange(e)} />
        </Button>
        <div id="caption">
          <TextField
            onChange={(e) => setCaption(e.target.value)}
            id="standard-basic"
            label="Add a caption"
            variant="standard"
          />
        </div>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {imageExists && <div className="imageName">{image.name}</div>}
        </div>

        <Button type="submit" variant="outlined">
          Post
        </Button>
      </form>
    </div>
  );
}

export default Form;
