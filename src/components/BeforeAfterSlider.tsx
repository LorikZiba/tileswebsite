"use client";

import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  className?: string;
  initialPosition?: number; // 0–100
  lang?: "de" | "en";
};

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  alt = "",
  className = "",
  initialPosition = 50,
  lang = "de",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(initialPosition);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

  const updatePositionFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relative = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(relative, 0, 100));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    updatePositionFromClientX(e.clientX);

    const mouseMove = (ev: MouseEvent) => updatePositionFromClientX(ev.clientX);
    const mouseUp = () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    updatePositionFromClientX(touch.clientX);

    const touchMove = (ev: TouchEvent) => {
      const t = ev.touches[0];
      if (!t) return;
      updatePositionFromClientX(t.clientX);
    };

    const touchEnd = () => {
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
      window.removeEventListener("touchcancel", touchEnd);
    };

    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", touchEnd);
    window.addEventListener("touchcancel", touchEnd);
  };

  return (
    <div
      ref={containerRef}
      className={
        "relative w-[35%] overflow-hidden rounded-2xl shadow-lg cursor-col-resize select-none " +
        "aspect-square bg-slate-900/70 " +
        className
      }
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* AFTER image – full width, bottom layer */}
      <Image
        src={afterSrc}
        alt={alt}
        fill
        className="object-contain"
        priority
      />

      {/* BEFORE image – full width, but clipped */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeSrc}
          alt={alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Slider line + handle */}
      <div
        className="absolute inset-y-0"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Vertical line */}
        <div className="h-full w-0.5 bg-white/90 shadow-[0_0_3px_rgba(0,0,0,0.7)]" />

        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 border border-slate-700 shadow-lg">
            <div className="flex gap-1">
              <span className="block h-4 w-1 rounded bg-slate-800" />
              <span className="block h-4 w-1 rounded bg-slate-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Optional labels */}
      <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
        {lang === "de" ? "Vorher" : "Before"}
      </div>
      <div className="absolute top-3 right-3 rounded-full bg-emerald-600/80 px-3 py-1 text-xs text-white">
        {lang === "de" ? "Nachher" : "After"}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
