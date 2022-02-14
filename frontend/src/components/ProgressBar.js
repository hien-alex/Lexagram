import React, { useState, useEffect } from "react";
import Upload from "../hooks/upload.js";

const ProgressBar = ({ setImage, setCaption, post }) => {
  const { url, progress, error } = Upload(post);

  useEffect(() => {
    if (url) {
      setImage(null);
      setCaption("");
    }
  }, [url, setImage]);

  return <div className="progress_bar">{progress + "%"}</div>;
};

export default ProgressBar;
