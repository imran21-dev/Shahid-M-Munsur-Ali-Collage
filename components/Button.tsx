"use client";

import { useRef } from "react";

export default function GlowButton({
  label = "SEE IN ACTION",
  targetId,
  onClick,
}: {
  label?: string;
  targetId?: string;
  onClick?: () => void;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    const glow = glowRef.current;
    if (!btn || !glow) return;
    const rect = btn.getBoundingClientRect();
    glow.style.left = `${e.clientX - rect.left}px`;
    glow.style.top = `${e.clientY - rect.top}px`;
  };

  const handleMouseLeave = () => {
    const glow = glowRef.current;
    if (!glow) return;
    glow.style.left = "75%";
    glow.style.top = "50%";
  };

  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex items-center justify-center gap-2 px-4 md:px-12 py-2 md:py-3 rounded-full overflow-y-hidden overflow-x-clip cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #fffff7e1 0%, #fffff7e1 100%)",
        border: "1px solid #FFFFF7",
      }}
    >
      <span
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-20 md:w-28 h-14 rounded-full transition-[left,top] duration-300 mix-blend-overlay"
        style={{
          left: "75%",
          top: "50%",
          background:
            "radial-gradient(circle, #fff8d0 0%, #ffae00 30%, #ff6600 65%, transparent 100%)",
          filter: "blur(10px)",
        }}
      />

      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 0 18px 2px rgba(245,140,30,0.35), inset 0 0 12px 1px rgba(245,140,30,0.1)",
        }}
      />
      <span
        className="relative z-10 text-[10px] md:text-xs font-bold uppercase  select-none"
        style={{ color: "#3d1f00" }}
      >
        {label}
      </span>
      <span
        className="relative z-10 text-[10px] md:text-xs font-bold transition-transform duration-200 group-hover:translate-x-1 select-none"
        style={{ color: "#3d1f00" }}
      >
        →
      </span>
    </button>
  );
}
