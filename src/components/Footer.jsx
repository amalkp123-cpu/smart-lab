import React from "react";
import { motion } from "framer-motion";
import "./footer.css";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p>© 2026 SmartLab Examination System</p>
      <span className="status">SYSTEM ONLINE</span>
    </motion.footer>
  );
};

export default Footer;
