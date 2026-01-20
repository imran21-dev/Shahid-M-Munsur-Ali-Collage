"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Github } from "lucide-react";
import ShinyText from "../ShinyText";

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

  return (
    <nav className="absolute top-0 left-0 px-[15%] pt-5 w-full flex items-center justify-between">
      <section className="flex items-center gap-14">
        <h2>Dev Imran</h2>
        <div>
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive ? "text-primary" : "text-foreground"} text-sm ml-6  hover:text-primary transition-colors`}
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

        {/* <AnimatedThemeToggler /> */}
      </div>
    </nav>
  );
}
