import "../css/Gallery.css";
import Retrieve from "../hooks/retrieve.js";
import { storage, database, timestamp } from "../firebase/config.js";
import { animate, motion } from "framer-motion";
import { useState, useEffect } from "react";

const Gallery = () => {
  const { gallery } = Retrieve("galleryRef");
  const [date, setDate] = useState("");
  const convertTime = (time) => {
    const date =
      "Posted on " + time.toDate().toDateString().split(" ").slice(1).join(" ");
    setDate(date);
  };
  console.log(gallery);
  return (
    <div className="image_container">
      {gallery &&
        gallery.map((image) => (
          <motion.div className="image_wrap">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              src={image.url}
              alt="Image Missing"
            ></motion.img>
          </motion.div>
        ))}
    </div>
  );
};

export default Gallery;
