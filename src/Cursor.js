import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e) => {
      if (e.target.closest(".cursor-hover")) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(".cursor-hover")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: hovering ? 40 : 20,
        height: hovering ? 40 : 20,
        borderRadius: "50%",
        backgroundColor: hovering ? "rgba(255,255,255,0.8)" : "rgba(0,120,255,0.8)",
        pointerEvents: "none",
        transform: `translate(${position.x - (hovering ? 20 : 10)}px, ${position.y - (hovering ? 20 : 10)}px)`,
        transition: "all 0.15s ease-out",
        zIndex: 9999,
        mixBlendMode: "difference"
      }}
    />
  );
};

export default Cursor;
