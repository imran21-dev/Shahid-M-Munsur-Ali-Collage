"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #080810;
          overflow: hidden;
        }

        .container {
          min-height: 100vh;
          background: #080810;
          display: flex;
          max-width: 100vw;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Space Mono', monospace;
          position: relative;
          overflow: hidden;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem;
        }

        /* Terminal chip */
        .terminal-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 2rem;
          font-size: 0.75rem;
          color: #818cf8;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .chip-dot {
          width: 6px; height: 6px;
          background: #6366f1;
          border-radius: 50%;
          animation: blink 1s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* 404 Number */
        .error-code {
          font-family: 'Syne', sans-serif;
          font-size: clamp(8rem, 20vw, 14rem);
          font-weight: 800;
          line-height: 1;
          position: relative;
          color: transparent;
          -webkit-text-stroke: 1px rgba(99,102,241,0.4);
          margin-bottom: 0.5rem;
          user-select: none;
        }

        .error-code::before,
        .error-code::after {
          content: '404';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #6366f1, #a855f7, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .error-code::before {
          animation: glitch1 3s infinite;
        }

        .error-code::after {
          animation: glitch2 3s infinite;
        }

        @keyframes glitch1 {
          0%, 90%, 100% { clip-path: none; transform: translate(0); }
          92% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translate(-4px, 2px); }
          94% { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); transform: translate(4px, -2px); }
          96% { clip-path: none; transform: translate(0); }
        }

        @keyframes glitch2 {
          0%, 90%, 100% { clip-path: none; transform: translate(0); opacity: 1; }
          91% { clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%); transform: translate(3px, -3px); opacity: 0.8; }
          93% { clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%); transform: translate(-3px, 3px); opacity: 0.8; }
          95% { clip-path: none; transform: translate(0); opacity: 1; }
        }

        /* Error message */
        .error-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        /* Terminal box */
        .terminal {
          background: rgba(15, 15, 25, 0.8);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 12px;
          padding: 1.25rem 1.75rem;
          margin: 1.5rem auto;
          max-width: 480px;
          text-align: left;
          backdrop-filter: blur(10px);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(99,102,241,0.15);
        }

        .t-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
        }

        .t-red { background: #ff5f57; }
        .t-yellow { background: #febc2e; }
        .t-green { background: #28c840; }

        .terminal-line {
          font-size: 0.8rem;
          line-height: 1.8;
          color: #64748b;
        }

        .terminal-line span.cmd { color: #6366f1; }
        .terminal-line span.path { color: #06b6d4; }
        .terminal-line span.err { color: #f87171; }
        .terminal-line span.ok { color: #34d399; }

        .cursor {
          display: inline-block;
          width: 8px; height: 14px;
          background: #6366f1;
          vertical-align: middle;
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        /* Buttons */
        .btn-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(99,102,241,0.4); }

        .btn-primary span { position: relative; z-index: 1; }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: transparent;
          color: #94a3b8;
          text-decoration: none;
          border-radius: 8px;
          border: 1px solid rgba(148,163,184,0.2);
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: rgba(99,102,241,0.5);
          color: #818cf8;
          transform: translateY(-2px);
        }

        /* Error code badge */
        .badge {
          display: inline-block;
          background: rgba(248,113,113,0.1);
          border: 1px solid rgba(248,113,113,0.25);
          color: #f87171;
          font-size: 0.7rem;
          padding: 3px 10px;
          border-radius: 4px;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

      `}</style>

      <div className="container">
        <div className="content">
          <div className="terminal-chip">
            <div className="chip-dot" />
            error_handler.ts
          </div>

          <div className="error-code">404</div>

          <div className="badge">PAGE_NOT_FOUND</div>

          <h1 className="error-title">Oops! Wrong Route</h1>

          {/* Terminal block */}
          <div className="terminal">
            <div className="terminal-header">
              <div className="t-dot t-red" />
              <div className="t-dot t-yellow" />
              <div className="t-dot t-green" />
            </div>
            <div className="terminal-line">
              <span className="cmd">$ </span>
              <span className="path">GET </span>
              <span className="err">/unknown-page</span>
            </div>
            <div className="terminal-line">
              <span className="err">✗ </span>
              <span style={{ color: "#94a3b8" }}>404 — Resource not found</span>
            </div>
            <div className="terminal-line">
              <span className="ok">→ </span>
              <span style={{ color: "#94a3b8" }}>
                Redirecting to safety{dots}
              </span>
              <span className="cursor" />
            </div>
          </div>

          <div className="btn-group">
            <Link href="/" className="btn-primary">
              <span>⌂ Back to Home</span>
            </Link>
            <Link href="/#contact" className="btn-secondary">
              ✉ Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
