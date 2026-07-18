import React from 'react';
import { motion } from 'framer-motion';

// A technical "scan line" reveal effect mimicking satellite data rendering
export const ScanReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "20%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
      {/* Scanning laser line effect */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-primary shadow-[0_0_8px_rgba(13,148,136,0.65)]"
        initial={{ top: "100%", opacity: 1 }}
        whileInView={{ top: "-10%", opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "linear", delay: delay + 0.2 }}
      />
    </div>
  );
};
