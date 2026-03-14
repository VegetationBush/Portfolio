import { useEffect, useRef, useState } from "react";
import '../index.css'

const ANIMATION_DELAY_MS = 3000;

const ScrollTip = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      containerRef.current.style.animation = "none"
      containerRef.current.offsetHeight
      containerRef.current.style.animationDelay = "0.5"
      containerRef.current.style.animation = "scrollTipFadeOut 0.3s ease-in-out forwards";
    };
    const scrollTarget = containerRef.current?.parentElement?.parentElement ?? window

    const timer = setTimeout(() => {
      scrollTarget.addEventListener("scroll", handleScroll, { passive: true, once: true });
    }, ANIMATION_DELAY_MS);

    return () => {
      clearTimeout(timer);
      scrollTarget.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "20px",
        width: "100px",

        animation: "scrollTipFadeIn 0.5s ease-in-out",
        animationDelay: ANIMATION_DELAY_MS + "ms",
        animationFillMode: "both",

        bottom: 10,
        left: "50%",

        opacity: 0,

        fontWeight: 700,

        transform: "translateX(-50%)",
        position: "absolute",
      }}
    >
      Scroll down
      <style>
        {`@keyframes scrollTipFadeIn {
          0%   { transform: translate(-50%, -25px); opacity: 0; }
          100% { transform: translate(-50%, 0px); opacity: 1; }
        }`}
        {`@keyframes scrollTipFadeOut {
          0%   { transform: translate(-50%, 0px); opacity: 1; }
          100% { transform: translate(-50%, 25px); opacity: 0; }
        }`}
      </style>
    </div>
  );
};

export default ScrollTip;