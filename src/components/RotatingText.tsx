"use client";

import { useState, useEffect } from "react";

const words = [
  "Forklifts",
  "Reach Trucks",
  "Power Pallets",
  "Tow Trucks",
  "Electric Pallets",
  "VNA Trucks",
  "Stackers",
  "Order Pickers",
  "Hand Pallets",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block pb-3">
      <span className="overflow-hidden inline-block align-bottom">
        <span
          className={`inline-block text-primary transition-all duration-300 ${
            animating
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {words[index]}
        </span>
      </span>
      {/* Hand-drawn curly underline */}
      <svg
        className="absolute bottom-0 left-0 w-full h-3 text-primary"
        viewBox="0 0 120 8"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5.5C8 2 14 8 20 5.5S32 2 38 5.5 50 2 56 5.5 68 2 74 5.5 86 2 92 5.5 104 2 110 5.5 116 4 118 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
