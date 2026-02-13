import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const sections = ['about', 'features', 'footer'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">
            <strong>SMART</strong>LAB
          </h2>

          {/* Desktop */}
          <div className="nav-links desktop">
            {sections.map((s) => (
              <button key={s} onClick={() => goTo(s)}>
                {s.toUpperCase()}
              </button>
            ))}
            <button
              className="nav-cta"
              onClick={() => {
                window.location.hash = 'get-started';
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </button>
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setOpen(true)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* Side Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="side-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            {sections.map((s) => (
              <button key={s} onClick={() => goTo(s)}>
                {s.toUpperCase()}
              </button>
            ))}

            <button
              className="nav-cta mobile-cta"
              onClick={() => {
                window.location.hash = 'get-started';
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
            >
              Get Started
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
