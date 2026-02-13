import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";
import Motto from "./Motto";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const teacherBtnRef = useRef(null);
  const studentBtnRef = useRef(null);

  // Check if Get Started triggered focus
  useEffect(() => {
    if (window.location.hash === "#get-started") {
      teacherBtnRef.current?.focus();
      teacherBtnRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, []);

  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Motto />

        <h1>
          Smart Randomized
          <span className="outline-text"> Laboratory Examination System</span>
        </h1>

        <p>
          SmartLab transforms traditional laboratory exams into a secure,
          intelligent digital experience by automating question distribution,
          seat allocation, and viva assessments.
        </p>

        <p>
          Built-in intelligence prevents duplication, reduces malpractice,
          and ensures fairness throughout the examination process.
        </p>

        <div className="about-actions">
          <motion.button
            ref={teacherBtnRef}
            whileHover={{ scale: 1.05 }}
            className="primary"
            onClick={() => navigate("/teacher-auth")}
          >
            Teacher Portal
          </motion.button>

          <motion.button
            ref={studentBtnRef}
            whileHover={{ scale: 1.05 }}
            className="secondary"
            onClick={() => navigate("/student-login")}
          >
            Student Portal
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
