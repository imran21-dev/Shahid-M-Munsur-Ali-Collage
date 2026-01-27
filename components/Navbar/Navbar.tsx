"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Github } from "lucide-react";
import ShinyText from "../ShinyText";
import { useEffect, useState } from "react";
import logo from "@/images/logo.png";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const [on, setOn] = useState(true);

  useEffect((): (() => void) => {
    let timer: ReturnType<typeof setTimeout>;
    let active = true;

    const blink = (): void => {
      if (!active) return;

      // Fast + irregular like router signal
      const delay: number = Math.random() * 250 + 80; // 80ms – 330ms

      timer = setTimeout(() => {
        setOn(Math.random() > 0.35); // random ON/OFF pattern
        blink();
      }, delay);
    };

    blink();

    return (): void => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className="absolute z-30 top-0 left-0 px-[18.3%] pt-3 w-full flex items-center justify-between">
      <section className="flex items-center gap-14">
        <Link href="/" className="flex items-center text-xl font-bold">
          <Image
            src={logo}
            width={2000}
            height={2000}
            quality={100}
            alt="Logo"
            className="w-10"
          />
          Imran
        </Link>
        <div>
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive ? "text-primary" : "text-foreground"} text-sm ml-5  hover:text-primary transition-colors `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </section>

      <div className="flex items-center gap-6">
        <Link
          href="https://github.com/DevImran"
          target="_blank"
          className="flex text-sm items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <Github className="w-5" /> Github
        </Link>
        <button className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl px-3 py-2 cursor-pointer hover:border-foreground/20  duration-200 flex items-center ">
          <ShinyText
            text="🔗 Resume"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-xs font-semibold"
          />
        </button>
        <div className="flex items-center gap-2">
          <span
            className={`h-1 w-1 rounded-full 
        ${on ? "bg-secondary shadow-[0_0_20px_2px_#f26d44]" : ""}`}
          />
        </div>
      </div>
    </nav>
  );
}
