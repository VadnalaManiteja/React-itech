import React from "react";
import { motion } from "framer-motion";
import "./SamplePage.css";

const SamplePage = () => {
  return (
    <div className="container">
      {/* Animated Heading */}
      <motion.h1
        className="heading"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My React Page
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="subheading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Building modern web applications with style!
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert("Button Clicked!")}
      >
        Get Started
      </motion.button>

      {/* Floating Boxes */}
      <motion.div
        className="floating-box red"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>
      <motion.div
        className="floating-box blue"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="floating-box green"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
      ></motion.div>
    </div>
  );
};

export default SamplePage;
