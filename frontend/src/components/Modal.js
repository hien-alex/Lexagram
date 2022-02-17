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
      <div className="container">
        <img src={selectedImg} alt="Error" />
        <div className="caption">{selectedCaption}</div>
        <div className="time">{selectedTime}</div>
      </div>
    </motion.div>
  );
};

export default Modal;
