"use client";
import Image from "next/image";
import Logo from "@/images/logo.png";
import Link from "next/link";
import AnimatedThemeTogglerBtn from "../AnimatedThemeTogglerBtn";
import { usePathname } from "next/navigation";
import { ChevronDown, Dot, HeadphoneOff, Headphones } from "lucide-react";
import { useAppContext } from "@/context/ContextApi";
import { useEffect, useRef, useState } from "react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Admission", href: "/admission" },
  {
    name: "Faculty",
    dropdown: [
      { name: "HSC", href: "/faculty/hsc" },
      { name: "HSC(BM)", href: "/faculty/hsc-bm" },
      { name: "Degree", href: "/faculty/degree" },
      { name: "Honors", href: "/faculty/honors" },
    ],
  },
  { name: "Faculty Members", href: "/faculty-members" },
  {
    name: "Academics",
    dropdown: [
      { name: "Notice Board", href: "/academics/notice-board" },
      { name: "Academic Result", href: "/academics/result" },
      { name: "Library Info", href: "/academics/library" },
      { name: "Class Routine", href: "/academics/routine" },
      { name: "Academic Calendar", href: "/academics/calendar" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Campus", href: "/campus" },
  {
    name: "About Us",
    dropdown: [
      { name: "Introduction", href: "/about/introduction" },
      { name: "Mission & Vision", href: "/about/mission-vision" },
      { name: "Message from President", href: "/about/president-message" },
      { name: "Message from Principal", href: "/about/principal-message" },
      { name: "Governing Body", href: "/about/governing-body" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  const { muted, setMuted } = useAppContext();
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.1;

    if (muted) {
      // Play if muted state is true (meaning "audio ON")
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      // Pause if muted state is false (meaning "audio OFF")
      audioRef.current.pause();
    }
  }, [muted]);

  // Play automatically on mount if muted is true
  useEffect(() => {
    if (audioRef.current && muted) {
      audioRef.current.play().catch((err) => console.log(err));
    }
  }, []);

  return (
    <nav className="navbar z-50 sticky top-0 text-sm">
      <div className="navbar__container">
        <div className="navbar-left  w-44">
          <Link href="/">
            <Image
              src={Logo}
              alt="College Logo"
              className="w-16 h-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <ul className="navbar__menu ">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative group duration-200 hover:bg-accent/30  rounded-md px-3 py-2  last:border-0"
            >
              {link.href ? (
                <Link
                  href={link.href}
                  className={`${
                    isActive(link.href) ? "text-primary" : ""
                  } group-hover:text-primary`}
                >
                  {link.name}
                </Link>
              ) : (
                <span className="cursor-pointer group-hover:text-primary flex items-center gap-1">
                  {link.name} <ChevronDown className="w-4" />
                </span>
              )}
              {link.dropdown && (
                <ul
                  className="absolute left-0 top-full mt-3
                     opacity-0 invisible
                     group-hover:opacity-100 group-hover:visible
                     transition-all duration-300 ease-in-out
                     bg-background border border-secondary p-2 rounded-lg  w-max z-50"
                >
                  {link.dropdown.map((sublink) => (
                    <li
                      key={sublink.name}
                      className={`hover:bg-accent/30  hover:text-primary px-3 py-2 capitalize rounded-lg 
                      }`}
                    >
                      <Link
                        href={sublink.href}
                        className={`${
                          isActive(sublink.href) ? "text-primary " : ""
                        } flex items-center `}
                      >
                        <Dot className="p-0 -ml-2" /> {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-right w-44 flex justify-end items-center gap-2">
          <div className="flex w-max bg-background items-center uppercase  border border-foreground/10 rounded-lg p-1">
            <Link
              href="/login"
              className="navbar-login px-3 py-2 hover:bg-accent/30 rounded-sm hover:text-primary"
            >
              Login
            </Link>
          </div>
          <div className="duration-200 hover:text-primary">
            <audio
              ref={audioRef}
              src="/sounds/bg-music.mp3"
              preload="auto"
              loop
            />
            <button
              onClick={() => setMuted(!muted)}
              className="bg-background rounded-full p-2 "
            >
              {muted ? <Headphones /> : <HeadphoneOff />}
            </button>
          </div>

          <div className="bg-background hover:text-primary duration-200 rounded-full flex p-2">
            <AnimatedThemeTogglerBtn />
          </div>
        </div>
      </div>
    </nav>
  );
}
