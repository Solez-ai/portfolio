"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;

    // The component is hidden via CSS for mobile, but this JS check provides an extra layer of robustness
    // to ensure it doesn't run on touch-primary devices.
    if (!cursorEl || window.matchMedia("(pointer: coarse)").matches) {
      if (cursorEl) {
        cursorEl.style.display = "none";
      }
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      // Use requestAnimationFrame to ensure smooth animation synced with the browser's repaint cycle.
      requestAnimationFrame(() => {
        if (cursorEl) {
          // The cursor div is positioned at top:0, left:0.
          // We use transform to move it, which is more performant than updating top/left properties.
          // We subtract half the cursor's width/height (16px / 2 = 8px) to perfectly center it on the mouse pointer.
          cursorEl.style.transform = `translate(${clientX - 8}px, ${clientY - 8}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999]"
      // Initialize the cursor off-screen to prevent a flash at (0,0) before the first mouse move.
      style={{ transform: "translate(-100%, -100%)" }}
    />
  );
};

export default CustomCursor;