// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import logo from "@/images/logo.png";
// import devImage from "@/images/profile.jpg";
// import Image from "next/image";
// import { useAppContext } from "@/context/ContextApi";
// import { useEffect, useRef, useState } from "react";
// import SoundWaveBtn from "../SoundWaveBtn";

// export default function Navbar() {
//   const { on } = useAppContext();
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const audioRef = useRef<HTMLAudioElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const tryPlay = async () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     try {
//       audio.muted = false;
//       audio.volume = 0.2;
//       await audio.play();
//       setIsPlaying(true);
//       console.log("Audio started");
//     } catch (err) {
//       console.log("Play failed:", err);
//     }
//   };

//   const toggleAudio = async () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (audio.paused) {
//       await tryPlay();
//     } else {
//       audio.pause();
//       setIsPlaying(false);
//     }
//   };

//   useEffect(() => {
//     const unlockAudio = async () => {
//       await tryPlay();

//       window.removeEventListener("click", unlockAudio);

//       window.removeEventListener("touchstart", unlockAudio);
//       window.removeEventListener("keydown", unlockAudio);
//     };

//     window.addEventListener("click", unlockAudio);

//     window.addEventListener("touchstart", unlockAudio);
//     window.addEventListener("keydown", unlockAudio);

//     return () => {
//       window.removeEventListener("click", unlockAudio);

//       window.removeEventListener("touchstart", unlockAudio);
//       window.removeEventListener("keydown", unlockAudio);
//     };
//   }, []);

//   return (
//     <>
//       <nav className="absolute z-30 top-0 left-0 px-3 xl:px-[18.3%] pt-2 md:pt-3 w-full flex items-center justify-between">
//         <section className="flex items-center gap-14">
//           <Link
//             href="/"
//             className="flex items-center gap-0.5 md:gap-1.5 text-sm md:text-xl font-medium"
//           >
//             <Image
//               src={logo}
//               width={2000}
//               height={2000}
//               quality={100}
//               alt="Logo"
//               className="w-3 md:w-6 opacity-50"
//             />
//             <span>
//               Dev<span className="opacity-50">Imran</span>.
//             </span>
//           </Link>
//           <div className="hidden md:flex">
//             <ul className="flex items-center gap-3">
//               <li className="footer-link nav-link">
//                 {isHome ? (
//                   <a href="#home">Home</a>
//                 ) : (
//                   <Link href="/#home">Home</Link>
//                 )}
//               </li>
//               <li className="footer-link nav-link">
//                 {isHome ? (
//                   <a href="#skills">Skills</a>
//                 ) : (
//                   <Link href="/#skills">Skills</Link>
//                 )}
//               </li>
//               <li className="footer-link nav-link">
//                 {isHome ? (
//                   <a href="#projects">Projects</a>
//                 ) : (
//                   <Link href="/#projects">Projects</Link>
//                 )}
//               </li>
//               <li className="footer-link nav-link">
//                 {isHome ? (
//                   <a href="#services">Services</a>
//                 ) : (
//                   <Link href="/#services">Services</Link>
//                 )}
//               </li>
//               <li className="footer-link nav-link">
//                 {isHome ? (
//                   <a href="#contact">Contact</a>
//                 ) : (
//                   <Link href="/#contact">Contact</Link>
//                 )}
//               </li>
//               <li>
//                 <Link href="/about" className="footer-link  nav-link">
//                   About me
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <div className="flex items-center gap-1.5 md:gap-3">
//           <SoundWaveBtn toggleAudio={toggleAudio} isPlaying={isPlaying} />
//           <div
//             className={`border-2 border-foreground/10 md:border-foreground/20 rounded-full p-0.5  relative flex items-center gap-1.5 cursor-pointer `}
//           >
//             <div className="flex items-center pl-1 md:pl-1.5 ">
//               <span
//                 className={`size-0.5 md:size-1 rounded-full
//         ${on ? "bg-[#22C55E] shadow-[0_0_25px_4px_#22C55E,0_0_0px_0px_rgba(34,197,94,0.8)]" : ""}`}
//               />
//             </div>
//             <h6 className="text-[10px] md:text-xs text-foreground/80 ">
//               Online
//             </h6>
//             <Image
//               src={devImage}
//               width={1000}
//               height={1000}
//               quality={100}
//               alt="Developer Profile"
//               className={`size-4 md:size-6  rounded-full object-cover  `}
//             />
//           </div>
//           <audio ref={audioRef} preload="auto" loop>
//             <source src="/sounds/bg-music.mp3" type="audio/mpeg" />
//           </audio>
//         </div>
//       </nav>
//     </>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/images/logo.png";
import devImage from "@/images/profile.jpg";
import Image from "next/image";
import { useAppContext } from "@/context/ContextApi";
import { useEffect, useRef, useState } from "react";
import SoundWaveBtn from "../SoundWaveBtn";

export default function Navbar() {
  const { on } = useAppContext();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const tryPlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.muted = false;
      audio.volume = 0.2;
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.log("Play failed:", err);
    }
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await tryPlay();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const unlockAudio = async () => {
      await tryPlay();
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: isHome ? "#home" : "/#home" },
    { label: "Skills", href: isHome ? "#skills" : "/#skills" },
    { label: "Projects", href: isHome ? "#projects" : "/#projects" },
    { label: "Services", href: isHome ? "#services" : "/#services" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
    { label: "About me", href: "/about" },
  ];

  return (
    <>
      <nav className="absolute z-30 top-0 left-0 containe_r pt-3 w-full flex items-center justify-between">
        <section className="flex items-center gap-14">
          <Link
            href="/"
            className="flex items-center gap-1 md:gap-1.5 text-lg md:text-xl font-medium"
          >
            <Image
              src={logo}
              width={2000}
              height={2000}
              quality={100}
              alt="Logo"
              className="w-5 md:w-6 opacity-50"
            />
            <span>
              Dev<span className="opacity-50">Imran</span>.
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={label} className="footer-link nav-link">
                  {isHome && href.startsWith("#") ? (
                    <a href={href}>{label}</a>
                  ) : (
                    <Link href={href}>{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex items-center gap-1.5 md:gap-3">
          <SoundWaveBtn toggleAudio={toggleAudio} isPlaying={isPlaying} />

          <div className="border-2 border-foreground/10 md:border-foreground/20 rounded-full p-0.5 relative flex items-center gap-1.5 cursor-pointer">
            <div className="flex items-center pl-1.5">
              <span
                className={`size-1 rounded-full ${on ? "bg-[#22C55E] shadow-[0_0_6px_2px_#22C55E]" : ""}`}
              />
            </div>
            <h6 className="text-[10px] md:text-xs text-foreground/80">
              Online
            </h6>
            <Image
              src={devImage}
              width={1000}
              height={1000}
              quality={100}
              alt="Developer Profile"
              className="size-4 md:size-6 rounded-full object-cover"
            />
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-4 h-4"
            aria-label="Open menu"
          >
            <span
              className={`block h-[1.5px] bg-foreground/90 rounded-full transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-2.5 self-end"}`}
            />
            <span
              className={`block h-[1.5px] bg-foreground/90 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 w-5" : "w-4"}`}
            />
            <span
              className={`block h-[1.5px] bg-foreground/90 rounded-full transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-3 self-start"}`}
            />
          </button>

          <audio ref={audioRef} preload="auto" loop>
            <source src="/sounds/bg-music.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-background/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Aside */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-background/95 backdrop-blur-md border-l border-foreground/10
        flex flex-col px-7 py-8 lg:hidden
        transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1 text-base font-medium"
          >
            <Image
              src={logo}
              width={2000}
              height={2000}
              quality={100}
              alt="Logo"
              className="w-4 opacity-50"
            />
            <span>
              Dev<span className="opacity-50">Imran</span>.
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M14 4L4 14M4 4l10 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-0.5 flex-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-2.5 text-sm text-foreground/50 hover:text-foreground transition-colors duration-200 group"
              >
                <span className="w-3 h-px bg-foreground/20 group-hover:w-5 group-hover:bg-foreground/50 transition-all duration-300" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-center gap-2.5 pt-5 border-t border-foreground/10">
          <Image
            src={devImage}
            width={1000}
            height={1000}
            quality={100}
            alt="Developer Profile"
            className="size-7 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-medium">Imran</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span
                className={`size-1 rounded-full ${on ? "bg-[#22C55E] shadow-[0_0_6px_2px_#22C55E]" : "bg-foreground/20"}`}
              />
              <span className="text-[10px] text-foreground/40">Online</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
