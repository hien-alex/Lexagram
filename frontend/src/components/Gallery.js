import "../css/Gallery.css";
import { motion } from "framer-motion";

const Gallery = () => {
  const m = [1, 2, 3, 1, 2, 3, 4, 3, 2];
  return (
    <div className="image_container">
      {m.map((doc) => (
        <div className="image_wrap" whileHover={{ opacity: 1 }}>
          ?
        </div>
      ))}
    </div>
  );
};

export default Gallery;
