"use client";

import { clamp, motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

export default function EightBall() {
  const [active, setActive] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState("");
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
    <div className="w-full max-w-[550px] h-auto aspect-square">
      <motion.div className="w-full h-full">
        <motion.div className="flex justify-center items-center w-full h-full relative">
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
            dragElastic={1}
            onDragStart={() => setActive({ x: active.x, y: active.y })}
            onDragEnd={handleDragEnd}
            style={{
              x: dx,
              y: dy,
              background:
                "radial-gradient(circle at 50% 15%, #333 0%, #000 100%)",
            }}
            className="w-full h-full rounded-full absolute z-10 flex justify-center items-start pt-[15%] shadow-lg "
          >
            <motion.p className="bg-white text-black  font-black uppercase rounded-full mx-[33%] w-full aspect-square flex justify-center items-center text-center p-3 sm:p-5 transform rotate-x-10 rotate-y-0">
              <motion.span
                key={message + "8"}
                hidden={shouldAnimate}
                className="text-3xl sm:text-6xl"
              >
                {8}
              </motion.span>
              <motion.span
                key={message}
                hidden={!shouldAnimate}
                initial={{ opacity: shouldAnimate ? 0 : 1 }}
                animate={{ opacity: shouldAnimate ? 1 : 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="text-md sm:text-3xl line-clamp-2"
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
