"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function GlowingIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [intensity, setIntensity] = useState(0.6);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      // Max distance for effect (pixels)
      const maxDistance = 400;
      const normalizedDistance = Math.min(distance / maxDistance, 1);

      // Closer = brighter (0.6 base, up to 1.0 when very close)
      const newIntensity = 0.6 + (1 - normalizedDistance) * 0.4;
      setIntensity(newIntensity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto mb-8 flex items-center justify-center">
      <div
        className="absolute h-56 w-56 animate-glow-pulse rounded-full blur-3xl transition-opacity duration-300"
        style={{ backgroundColor: `rgba(139, 92, 246, ${intensity})` }}
      />
      <div
        className="absolute h-48 w-48 animate-glow-pulse-delayed rounded-full blur-2xl transition-opacity duration-300"
        style={{ backgroundColor: `rgba(168, 85, 247, ${intensity * 0.75})` }}
      />
      <Image
        src="/icon.png"
        alt="Torchio"
        width={180}
        height={180}
        className="relative h-44 w-44 drop-shadow-2xl"
      />
    </div>
  );
}
