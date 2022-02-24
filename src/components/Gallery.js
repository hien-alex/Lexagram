import "../css/Gallery.css";
import Retrieve from "../hooks/retrieve.js";
import { motion } from "framer-motion";

const Gallery = ({ setSelectedImg, setSelectedCaption, setSelectedTime }) => {
  const { gallery } = Retrieve("galleryRef");
  const convertTime = (time) => {
    const date =
      "Posted on " + time.toDate().toDateString().split(" ").slice(1).join(" ");
    setSelectedTime(date);
  };

  return (
    <div className="image_container">
      {gallery &&
        gallery.map((image) => (
          <motion.div
            className="image_wrap"
            onClick={() => {
              setSelectedImg(image.url);
              setSelectedCaption(image.caption);
              convertTime(image.time);
            }}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              src={image.url}
              alt="Image Missing!"
            ></motion.img>
          </motion.div>
        ))}
    </div>
  );
};

export default Gallery;
