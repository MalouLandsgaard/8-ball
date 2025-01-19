"use client";

import { clamp, motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

export default function EightBall() {
  const [active, setActive] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState("8");
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const messages = [
    "Go for it",
    "Make it happen",
    "Just do it",
    "Seize the day",
    "Go ahead",
    "Give it a try",
    "Go get it",
  ];
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    stiffness: 700,
    damping: 20,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  const handleDragEnd = () => {
    // Change message when drag ends
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setShouldAnimate(true);
  };

  return (
    <div className=" w-96 h-96">
      <motion.div style={{ width: "100%", height: "100%" }}>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
            dragElastic={1}
            onDragStart={() => setActive({ x: active.x, y: active.y })}
            onDragEnd={handleDragEnd}
            style={{
              background:
                "radial-gradient(circle at 50% 33%, #333 0%, #000 100%)",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              x: dx,
              y: dy,
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              paddingTop: "15%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <motion.p
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                fontSize: "2rem",
                borderRadius: "50%",
                height: "120px",
                width: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <motion.span
                key={message} // This triggers a re-render when message changes
                initial={{ opacity: shouldAnimate ? 0 : 1 }}
                animate={{ opacity: shouldAnimate ? 1 : 1 }}
                transition={{ duration: 2, delay: 1 }} // Adjust duration for fade-in effect
              >
                {message}
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <style>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
