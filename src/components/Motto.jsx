import React, { useEffect, useState } from "react";
import "./Motto.css";

const text = "When the System Meets Intelligence..";

const Motto = () => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="motto-container">
      <span className="typing-text">{displayed}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Motto;
