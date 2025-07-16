"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Starfild() {
  const [stars, setStars] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const tempStars = [];

    for (let i = 0; i < 100; i++) {
      tempStars.push({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
      });
    }

    setStars(tempStars);
  }, []);

  return (
    <div>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: Math.random() * 3 + 2, // pisca em tempos diferentes
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: star.y,
            left: star.x,
          }}
        />
      ))}
    </div>
  );
}
