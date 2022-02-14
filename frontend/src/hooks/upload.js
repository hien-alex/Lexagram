import { storage } from "../firebase/config.js";
import { useState, useEffect } from "react";

const Upload = (post) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const uploadImage = storage
      .ref(`images/${post.image.name}`)
      .put(post.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      () => {
        storage
          .ref("images")
          .child(post.image.name)
          .getDownloadURL()
          .then((url) => {
            setImageURL(url);
          });
      }
    );
  }, [post.image]);

  return { imageURL, progress, error };
};

export default Upload;
