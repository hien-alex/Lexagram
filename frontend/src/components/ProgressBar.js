import React, { useState, useEffect } from "react";
import Upload from "../hooks/upload.js";

const ProgressBar = ({ setImage, setCaption, post }) => {
  const { imageURL, progress, error } = Upload(post);

  useEffect(() => {
    if (imageURL) {
      setImage(null);
      setCaption("");
    }
  }, [imageURL, setImage]);

  return <div className="progress_bar">{progress + "%"}</div>;
};

export default ProgressBar;
