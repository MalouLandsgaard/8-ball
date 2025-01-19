"use client";

interface EightBallProps {}

export default function EightBall() {
  return (
    <div className="h-16 w-16 bg-black rounded-full flex items-center justify-center">
      <p>Eight Ball</p>
    </div>
  );
}

import React, { useRef } from "react";

interface ShakeableProps {
  children: React.ReactNode;
}

const Shakeable: React.FC<ShakeableProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    if (elementRef.current) {
      elementRef.current.classList.add("shake");
      console.log("mousedown");
    }
  };

  const handleMouseUp = () => {
    if (elementRef.current) {
      elementRef.current.classList.remove("shake");
      console.log("mouseup");
    }
  };

  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="cursor-grab"
    >
      {children}
    </div>
  );
};

export { Shakeable };
