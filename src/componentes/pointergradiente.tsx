"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpaceBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#0f172a] overflow-hidden">
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full opacity-30 blur-2xl"
        animate={{
          top: mouse.y - 250,
          left: mouse.x - 250,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%)",
        }}
      />
    </div>
  );
}
