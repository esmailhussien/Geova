import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Expert-level Text Reveal Animation
 * Splits a string into words and animates them sequentially (staggered).
 * Uses spring physics for a premium, heavy tech feel.
 */
export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  staggerDuration = 0.05
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: `1em`, // start pushed down relative to font size
      rotateX: 45, // slight 3D rotation for a high-end feel
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      },
    },
  };

  // Ensure we have a string to split
  const words = typeof text === 'string' ? text.split(" ") : [];

  return (
    <motion.div
      ref={ref}
      style={{ display: "inline-flex", flexWrap: "wrap", perspective: "1000px" }}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

/**
 * Line Reveal Animation for JSX blocks (when you have gradients or spans)
 * Wraps content in a hidden overflow mask and slides it up.
 */
export const LineReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={isInView ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
