"use client"; // Client side because it uses clicks and state
import { useState, useEffect } from "react";
import { Star, Heart, Sparkles, Zap, Flower2, Music } from "lucide-react";

export default function ClickDoodles() {
  const [doodles, setDoodles] = useState([]);

  // The list of icons we can stamp
  const icons = [Star, Heart, Sparkles, Zap, Flower2, Music];
  const colors = ["text-rose-400", "text-blue-400", "text-yellow-400", "text-purple-400", "text-green-400"];

  useEffect(() => {
    // Add event listener to the whole window
    const handleClick = (e) => {
      // 1. Create a new doodle object
      const newDoodle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        Icon: icons[Math.floor(Math.random() * icons.length)], // Random Icon
        color: colors[Math.floor(Math.random() * colors.length)], // Random Color
        rotation: Math.random() * 360, // Random tilt
        scale: 0.5 + Math.random(), // Random size
      };

      // 2. Add to state
      setDoodles((prev) => [...prev, newDoodle]);

      // 3. Remove it after 1 second (so the screen doesn't get clogged)
      setTimeout(() => {
        setDoodles((prev) => prev.filter((d) => d.id !== newDoodle.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {doodles.map((doodle) => (
        <div
          key={doodle.id}
          className={`absolute ${doodle.color} animate-[floatUp_1s_ease-out_forwards]`}
          style={{
            left: doodle.x,
            top: doodle.y,
            transform: `translate(-50%, -50%) rotate(${doodle.rotation}deg) scale(${doodle.scale})`,
          }}
        >
          {/* Render the specific Icon component */}
          <doodle.Icon size={32} strokeWidth={2.5} />
        </div>
      ))}
    </div>
  );
}