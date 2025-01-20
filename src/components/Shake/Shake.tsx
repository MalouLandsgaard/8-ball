"use client";
import { useEffect, useState } from "react";

const SHAKE_THRESHOLD = 15; // Adjust this value based on sensitivity

const useShakeDetector = (onShake: () => void) => {
  useEffect(() => {
    let lastX: number = 0,
      lastY: number = 0,
      lastZ: number = 0;
    let lastTime: number = new Date().getTime();

    const handleMotionEvent = (event: DeviceMotionEvent) => {
      const { accelerationIncludingGravity } = event;
      if (!accelerationIncludingGravity) return;

      const currentTime = new Date().getTime();
      const timeDifference = currentTime - lastTime;

      if (timeDifference > 100) {
        lastTime = currentTime;

        const { x, y, z } = accelerationIncludingGravity;
        const deltaX = Math.abs(lastX - (x ?? 0));
        const deltaY = Math.abs(lastY - (y ?? 0));
        const deltaZ = Math.abs(lastZ - (z ?? 0));

        if (
          deltaX > SHAKE_THRESHOLD ||
          deltaY > SHAKE_THRESHOLD ||
          deltaZ > SHAKE_THRESHOLD
        ) {
          onShake();
        }

        lastX = x ?? 0;
        lastY = y ?? 0;
        lastZ = z ?? 0;
      }
    };

    if (typeof window !== "undefined" && "DeviceMotionEvent" in window) {
      window.addEventListener("devicemotion", handleMotionEvent);
    }

    return () => {
      if (typeof window !== "undefined" && "DeviceMotionEvent" in window) {
        window.removeEventListener("devicemotion", handleMotionEvent);
      }
    };
  }, [onShake]);
};

const ShakeComponent = () => {
  const [shakeCount, setShakeCount] = useState(0);

  useShakeDetector(() => {
    setShakeCount((prev) => prev + 1);
    console.log("Shake detected!");
  });

  function simulateShakeEvent() {
    const event = new DeviceMotionEvent("devicemotion", {
      accelerationIncludingGravity: {
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
        z: Math.random() * 20 - 10,
      },
      interval: 100,
    });
    window.dispatchEvent(event);
  }

  return (
    <div>
      Shake count: {shakeCount}
      <button
        className="bg-[#5E5E5E] text-white font-bold uppercase px-4 py-2 rounded-md"
        onClick={simulateShakeEvent}
      >
        Test
      </button>
    </div>
  );
};

export default ShakeComponent;
