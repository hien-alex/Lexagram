import { useState, useEffect } from "react";

const Upload = (post) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  console.log(post.caption);
  console.log(post.image);
  return <div>hi</div>;
};

export default Upload;
