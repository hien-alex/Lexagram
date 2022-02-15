import { database } from "../firebase/config.js";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/Gallery.css";

const Retrieve = () => {
  const galleryCollection = database.collection("galleryRef");
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    galleryCollection.orderBy("time", "desc").onSnapshot((snapShot) => {
      let docs = [];
      snapShot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
      setGallery(docs);
    });
  }, [database.collection("galleryRef")]);

  return (
    <div className="image_container">
      {gallery.map((doc) => (
        <div className="image_wrap" whileHover={{ opacity: 0.5 }}>
          <img src={doc.url}></img>
        </div>
      ))}
    </div>
  );
};

export default Retrieve;
