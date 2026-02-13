import React from "react";
import { motion } from "framer-motion";
import "./Features.css";

const features = [
  {
    title: "Smart Question Engine",
    desc: "Generates unique practical questions for every student with controlled repetition and multiple patterns."
  },
  {
    title: "Intelligent Seat Mapping",
    desc: "Automatically assigns seats to avoid same-question neighbors and ensure exam integrity."
  },
  {
    title: "Controlled Regeneration",
    desc: "Allows limited re-randomization with automatic mark deduction and complete tracking history."
  },
  {
    title: "AI-Powered Viva",
    desc: "Generates viva questions and assists in evaluating algorithms, outputs, and records."
  },
  {
    title: "Secure Dual Portals",
    desc: "Separate teacher and student dashboards for exam creation, participation, and monitoring."
  },
  {
    title: "Centralized Exam Records",
    desc: "Stores every exam detail, seating layout, and performance result securely in MongoDB."
  }
];

const Features = () => {
  return (
    <section id="features" className="features">
      {features.map((item, i) => (
        <motion.div
          key={i}
          className="feature-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -8 }}
        >
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Features;
