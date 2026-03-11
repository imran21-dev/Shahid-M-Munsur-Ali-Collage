"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const sections = [
  {
    id: "intro",
    label: "Who I Am",
    icon: "✦",
    content:
      "Hi, I'm Imran — a passionate Web Developer with 2 years of experience building modern, responsive, and user-focused web applications.",
  },
  {
    id: "stack",
    label: "Tech Stack",
    icon: "⬡",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Firebase",
      "Git",
    ],
  },
  {
    id: "approach",
    label: "My Approach",
    icon: "◈",
    content:
      "I take pride in writing clean, efficient code and turning complex problems into simple, elegant solutions — whether that's architecting a scalable backend API or designing a polished frontend interface.",
  },
  {
    id: "beyond",
    label: "Beyond the Screen",
    icon: "◎",
    content:
      "I'm an avid photographer and traveler. Exploring new places and capturing moments through a lens keeps me creative and reminds me that the best interfaces — digital or otherwise — tell a compelling story.",
  },
  {
    id: "collab",
    label: "Let's Collaborate",
    icon: "→",
    content:
      "Always open to exciting projects and new collaborations. If you have an idea worth building, I'd love to hear it.",
    cta: true,
  },
];

export default function AboutPageAccordion() {
  const [openId, setOpenId] = useState("intro");

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="lg:p-2 flex flex-col gap-1">
      {sections.map((section, i) => {
        const isOpen = openId === section.id;
        return (
          <div key={section.id}>
            {i > 0 && (
              <div
                className="mx-3 my-0.5"
                style={{
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, #1e1e28 40%, #1e1e28 60%, transparent)",
                }}
              />
            )}

            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: `1px solid ${isOpen ? "#252530" : "transparent"}`,
                background: isOpen ? "#16161c" : "transparent",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              {/* Trigger */}
              <button
                className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => toggle(section.id)}
              >
                <span
                  className={`acc-icon text-sm flex-shrink-0${isOpen ? " open" : ""}`}
                  style={{
                    width: 18,
                    textAlign: "center",
                    color: "#e8622a",
                  }}
                >
                  {section.icon}
                </span>
                <span
                  className="font-syne flex-1 text-sm font-semibold"
                  style={{ color: isOpen ? "#f0f0f5" : "#c0c0d0" }}
                >
                  {section.label}
                </span>
                <span
                  className={`acc-chevron text-xs${isOpen ? " open" : ""}`}
                  style={{ color: isOpen ? "#e8622a" : "#3a3a4e" }}
                >
                  ▼
                </span>
              </button>

              {/* Body */}
              <div className={`acc-body${isOpen ? " open" : ""}`}>
                <div className="pb-4 pr-4" style={{ paddingLeft: 42 }}>
                  {section.tags ? (
                    <div className="flex flex-wrap gap-1.5">
                      {section.tags.map((t) => (
                        <span
                          key={t}
                          className="font-dm px-2.5 py-1 rounded-md"
                          style={{
                            fontSize: 11,
                            color: "#9090aa",
                            background: "#1e1e28",
                            border: "1px solid #2a2a38",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p
                        className="font-dm font-light leading-relaxed"
                        style={{ fontSize: 13, color: "#6a6a80" }}
                      >
                        {section.content}
                      </p>
                      {section.cta && (
                        <Link
                          href="/#contact"
                          className="font-syne mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold"
                          style={{
                            color: "#e8622a",
                            background: "rgba(232,98,42,0.08)",
                            border: "1px solid rgba(232,98,42,0.25)",
                            cursor: "pointer",
                            letterSpacing: "0.03em",
                          }}
                        >
                          Get in touch →
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
