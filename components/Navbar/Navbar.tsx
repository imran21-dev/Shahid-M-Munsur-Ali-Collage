"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/images/logo.png";
import devImage from "@/images/profile.jpg";
import Image from "next/image";
import { useAppContext } from "@/context/ContextApi";

export default function Navbar() {
  const { on } = useAppContext();
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <nav className="absolute z-30 top-0 left-0 px-[18.3%] pt-3 w-full flex items-center justify-between">
      <section className="flex items-center gap-14">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xl font-medium"
        >
          <Image
            src={logo}
            width={2000}
            height={2000}
            quality={100}
            alt="Logo"
            className="w-6 opacity-50"
          />
          <span>
            Dev<span className="opacity-50">Imran</span>.
          </span>
        </Link>
        <div>
          <ul className="flex items-center gap-3">
            <li className="footer-link nav-link">
              {isHome ? (
                <a href="#home">Home</a>
              ) : (
                <Link href="/#home">Home</Link>
              )}
            </li>
            <li className="footer-link nav-link">
              {isHome ? (
                <a href="#skills">Skills</a>
              ) : (
                <Link href="/#skills">Skills</Link>
              )}
            </li>
            <li className="footer-link nav-link">
              {isHome ? (
                <a href="#projects">Projects</a>
              ) : (
                <Link href="/#projects">Projects</Link>
              )}
            </li>
            <li className="footer-link nav-link">
              {isHome ? (
                <a href="#services">Services</a>
              ) : (
                <Link href="/#services">Services</Link>
              )}
            </li>
            <li className="footer-link nav-link">
              {isHome ? (
                <a href="#contact">Contact</a>
              ) : (
                <Link href="/#contact">Contact</Link>
              )}
            </li>
            <li>
              <Link href="/about" className="footer-link  nav-link">
                About me
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <div className="flex items-center gap-6">
        <div
          className={`border-2  border-foreground/20 rounded-full p-0.5  relative flex items-center gap-1.5 cursor-pointer `}
        >
          <div className="flex items-center pl-1.5 ">
            <span
              className={`size-1 rounded-full 
        ${on ? "bg-[#22C55E] shadow-[0_0_25px_4px_#22C55E,0_0_0px_0px_rgba(34,197,94,0.8)]" : ""}`}
            />
          </div>
          <h6 className="text-xs text-foreground/80 ">Online</h6>
          <Image
            src={devImage}
            width={1000}
            height={1000}
            quality={100}
            alt="Developer Profile"
            className={`size-6  rounded-full object-cover  `}
          />
        </div>
      </div>
    </nav>
  );
}
