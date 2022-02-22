import React from "react";
import "../css/Modal.css";
import { motion } from "framer-motion";

const Modal = ({
  setSelectedImg,
  setSelectedCaption,
  setSelectedTime,
  selectedImg,
  selectedCaption,
  selectedTime,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
      setSelectedCaption(null);
      setSelectedTime(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="container"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <img src={selectedImg} alt="Error" />
        <div className="caption">{selectedCaption}</div>
        <div className="time">{selectedTime}</div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
