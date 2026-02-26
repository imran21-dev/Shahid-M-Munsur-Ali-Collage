"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/images/logo.png";
import devImage from "@/images/profile.jpg";
import Image from "next/image";
import { useAppContext } from "@/context/ContextApi";

export default function Navbar() {
  const pathname = usePathname();
  const { on } = useAppContext();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

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
