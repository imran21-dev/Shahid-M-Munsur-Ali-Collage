"use client";
import React from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import { Sparkles } from "@/components/sparkles";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      (window as any).lenis?.scrollTo(element);
    }
  };

  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <div className="relative pb-20">
      <div className="px-[5%] pt-20 "></div>
      <div className=" w-screen overflow-hidden bg-background">
        <div className="relative  h-80 w-screen overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3a3a3a01_90%,transparent_90%)] before:opacity-100  after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#f08e7025] after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-size-[70px_80px] "></div>
          <Sparkles
            density={400}
            size={1.4}
            direction="top"
            className="absolute inset-x-0 top-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
        <div className="mx-auto -mt-52  w-screen max-w-2xl relative z-10">
          <div
            onClick={() => scrollToSection("home")}
            className="bg-foreground backdrop-blur-lg border border-neutral-800 p-4  w-28 h-28 mx-auto grid place-content-center rounded-full cursor-pointer"
          >
            <Image
              src={logo}
              width={1000}
              height={1000}
              alt="Logo"
              className="w-10  ml-2 invert-100"
            />
          </div>
        </div>
        <article className="text-white  pt-2 w-2/3 mx-auto block text-center z-10 relative ">
          <h3 className="text-2xl font-medium">
            Dev<span className="opacity-50">Imran</span>.
          </h3>
          <p className="opacity-50 text-sm pt-1 font-light">
            All Rights Reserved {new Date().getFullYear()}
          </p>
          <div className="pt-20 mx-auto w-max">
            <h6 className="opacity-50 text-xl font-light">Useful Links</h6>
            <ul className="flex pt-2   gap-3 text-sm">
              <li className="footer-link">
                {isHome ? (
                  <a href="#home">Home</a>
                ) : (
                  <Link href="/#home">Home</Link>
                )}
              </li>
              <li className="footer-link">
                {isHome ? (
                  <a href="#skills">Skills</a>
                ) : (
                  <Link href="/#skills">Skills</Link>
                )}
              </li>
              <li className="footer-link">
                {isHome ? (
                  <a href="#projects">Projects</a>
                ) : (
                  <Link href="/#projects">Projects</Link>
                )}
              </li>
              <li className="footer-link">
                {isHome ? (
                  <a href="#services">Services</a>
                ) : (
                  <Link href="/#services">Services</Link>
                )}
              </li>
              <li className="footer-link">
                {isHome ? (
                  <a href="#contact">Contact</a>
                ) : (
                  <Link href="/#contact">Contact</Link>
                )}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
