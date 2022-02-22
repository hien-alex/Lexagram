import React, { useEffect } from "react";
import Upload from "../hooks/upload.js";
import { motion } from "framer-motion";

const ProgressBar = ({ setImage, setCaption, post }) => {
  const { imageURL, progress, error } = Upload(post);

  useEffect(() => {
    if (imageURL) {
      setImage(null);
      setCaption("");
    }
  }, [imageURL, setImage]);

  return (
    <div>
      {progress} %
      <motion.div
        className="progress_bar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
