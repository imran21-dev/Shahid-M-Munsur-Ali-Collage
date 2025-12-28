"use client";
import Image from "next/image";
import Logo from "@/images/logo.png";
import Link from "next/link";
import AnimatedThemeTogglerBtn from "../AnimatedThemeTogglerBtn";
import { usePathname } from "next/navigation";
import { Dot } from "lucide-react";

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

  return (
    <nav className="navbar">
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
              className="relative group duration-200 hover:bg-accent/30  rounded-sm px-3 py-2 "
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
                <span className="cursor-pointer group-hover:text-primary">
                  {link.name}
                </span>
              )}
              {link.dropdown && (
                <ul
                  className="absolute left-0 top-full mt-1
                     opacity-0 invisible
                     group-hover:opacity-100 group-hover:visible
                     transition-all duration-300 ease-in-out
                     bg-secondary/50 border border-secondary p-2 rounded-md  w-max z-50"
                >
                  {link.dropdown.map((sublink, index) => (
                    <li
                      key={sublink.name}
                      className={`hover:bg-accent/30 hover:text-primary px-3 py-2 capitalize rounded-md 
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

        <div className="navbar-right w-44 flex gap-3 items-center uppercase">
          <Link href="/login" className="navbar-login">
            Login
          </Link>
          <AnimatedThemeTogglerBtn />
        </div>
      </div>
    </nav>
  );
}
