import React from 'react'
import "./ScrollComponent.css"
import { useState, useEffect } from "react";

const ScrollComponent = () => {
  
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="scroll-bar-outer">
      <div
        className="scroll-bar-inner"
        style={{ transform: `scaleX(${scroll / 100})` }}
      ></div>
    </div>
  );
}

export default ScrollComponent