import React, { useState } from "react";
import "../css/Form.css";
import { Button, Paper, TextField } from "@material-ui/core";
import ProgressBar from "./ProgressBar.js";

function Form() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  let post = { image: image, caption: caption };

  const [imageExists, setImageExists] = useState(false);
  const fileTypes = ["image/png", "image/pdf"];

  const handleUpload = (e) => {
    e.preventDefault();
    setImageExists(true);
  };

  const handleImageChange = (event) => {
    let imageChange = event.target.files[0];

    if (imageChange && fileTypes.includes(imageChange.type)) {
      setImage(imageChange);
      setError("");
      setImageExists(false);
    } else {
      setError("Please upload file in PNG or JPEG format!");
      setImage(null);
    }
  };

  return (
    <div className="form_container">
      <br />
      <form id="post_form" className="form" onSubmit={handleUpload}>
        <Button variant="outlined" component="label">
          Upload Image
          <input required type="file" onChange={(e) => handleImageChange(e)} />
        </Button>
        <br />
        <br />
        <div id="caption">
          <TextField
            onChange={(e) => setCaption(e.target.value)}
            id="standard-basic"
            label="Add a caption"
            variant="standard"
          />
          <div className="output">
            {error && <div className="error">{error}</div>}
            {image && <div className="imageName">{image.name}</div>}
            {image && imageExists && (
              <ProgressBar
                setImage={setImage}
                post={post}
                setCaption={setCaption}
              />
            )}
          </div>
        </div>

        <Button type="submit" variant="outlined">
          Post
        </Button>
      </form>
    </div>
  );
}

export default Form;
