import * as React from "react";
import { useState, useRef, useMemo } from "react";
import { motion, useDomEvent } from "framer-motion";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120
};

const Image = ({Device, UpdateOpenHeader}) => {
  const [isOpen, setOpen] = useState(false);

  useMemo(() => UpdateOpenHeader(isOpen))


  useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  return (
    <div className={`image-container ${isOpen ? "open" : ""}`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        className="productPage_img_item"
        src={process.env.REACT_APP_API_URL + Device.img}
        alt="Product"
        onClick={() => setOpen(!isOpen)}
        layoutTransition={transition}
      />
    </div>
  );
};

export default Image;