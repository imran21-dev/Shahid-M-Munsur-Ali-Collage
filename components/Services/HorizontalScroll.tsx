"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import img from "@/images/seo.svg";
import img2 from "@/images/deploy.svg";
import img3 from "@/images/frontend.svg";
import img4 from "@/images/responsive.svg";
import img5 from "@/images/backend.svg";
import CountUp from "../CountUp";

const slides = [
  {
    title: ["FRONTEND", "DEV"],
    bg: "bg-red-600",
    image: img3,
    alt: "Frontend Development",
  },
  {
    title: ["RESPONSIVE", "WEB"],
    bg: "bg-blue-500",
    image: img4,
    alt: "Responsive Web Design",
  },
  {
    title: ["SEO &", "SPEED"],
    bg: "bg-green-400",
    image: img,
    alt: "SEO & Speed Optimization",
  },
  {
    title: ["DEPLOY", "MENT"],
    bg: "bg-yellow-400",
    image: img2,
    alt: "Deployment",
  },
  {
    title: ["BACK", "END"],
    bg: "bg-purple-400",
    image: img5,
    alt: "Backend Development",
  },
];

/* ─── Mobile swipe carousel (< lg) ──────────────────────────────────── */
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  const slide = slides[current];

  return (
    <div className="block lg:hidden w-full">
      <div
        className={`relative w-full overflow-hidden ${slide.bg} flex flex-col justify-center items-center`}
        style={{ height: "100svh" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center items-start px-8"
          >
            <h2
              className="text-black font-semibold leading-none z-10 relative"
              style={{ fontSize: "clamp(3rem, 16vw, 6rem)" }}
            >
              {slide.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <Image
              src={slide.image}
              width={400}
              height={400}
              className="absolute bottom-0 right-0 w-[55vw] max-w-[260px] object-contain pointer-events-none select-none"
              alt={slide.alt}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-black scale-125" : "bg-black/30"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-black rounded-full w-9 h-9 flex items-center justify-center text-xl transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-black rounded-full w-9 h-9 flex items-center justify-center text-xl transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}

/* ─── Desktop scroll-driven horizontal scroll (lg+) ─────────────────── */
function DesktopHorizontal() {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ulRef.current) return;
      const section = ulRef.current.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / (sectionHeight - windowHeight), 0),
        1,
      );

      ulRef.current.style.transform = `translateX(-${
        progress * (ulRef.current.scrollWidth - window.innerWidth)
      }px)`;

      ulRef.current.querySelectorAll("h2").forEach((h) => {
        (h as HTMLElement).style.transform =
          `translateX(${800 - progress * 1600}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-screen h-[500vh] hidden lg:block">
      <ul ref={ulRef} className="flex h-screen w-[500vw] sticky top-0">
        <li className="h-screen w-screen bg-red-600 flex flex-col justify-center items-center overflow-hidden relative">
          <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold text-black">
            FRONTEND <br /> DEV
          </h2>
          <Image
            src={img3}
            width={500}
            height={500}
            className="2xl:w-[550px] w-[380px] object-cover absolute bottom-0 left-2/3"
            alt="Frontend Development"
          />
        </li>

        <li className="h-screen w-screen bg-blue-500 flex flex-col justify-center items-center overflow-hidden relative">
          <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold text-black">
            RESPONSIVE <br /> WEB
          </h2>
          <Image
            src={img4}
            width={500}
            height={500}
            className="2xl:w-[550px] w-[380px] object-cover absolute bottom-0 left-2/3"
            alt="Responsive Web Design"
          />
        </li>

        <li className="h-screen w-screen bg-green-400 flex flex-col justify-center items-center overflow-hidden relative">
          <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold text-black">
            SEO & SPEED
          </h2>
          <Image
            src={img}
            width={500}
            height={500}
            className="2xl:w-[550px] w-[380px] object-cover absolute bottom-0 left-2/3"
            alt="SEO & Speed Optimization"
          />
        </li>

        <li className="h-screen w-screen bg-yellow-400 flex flex-col justify-center items-center overflow-hidden relative">
          <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold text-black">
            DEPLOY <br />
            <span className="ml-96">MENT</span>
          </h2>
          <Image
            src={img2}
            width={500}
            height={500}
            className="2xl:w-[550px] w-[380px] object-cover absolute bottom-0 left-2/3"
            alt="Deployment"
          />
        </li>

        <li className="h-screen w-screen bg-purple-400 flex flex-col justify-center items-center overflow-hidden relative">
          <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold text-right text-black">
            <span className="ml-96">BACK</span>
            <br />
            END
          </h2>
          <Image
            src={img5}
            width={500}
            height={500}
            className="2xl:w-[550px] w-[380px] object-cover absolute bottom-0 left-2/3"
            alt="Backend Development"
          />
        </li>
      </ul>
    </section>
  );
}

/* ─── Main export ────────────────────────────────────────────────────── */
export default function HorizontalScroll() {
  return (
    <ReactLenis root>
      <main id="services">
        <article>
          {/* HEADER */}
          <header className="relative w-full grid place-content-center h-[40vh] md:h-[60vh] lg:h-[80vh]">
            <div className="absolute z-0 inset-0 bg-[linear-gradient(to_left,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_40%_100%_at_50%_0%,#000_50%,transparent_100%)]" />
            <div className="h-2/4 w-full bg-linear-to-b from-background via-background/50 to-transparent absolute top-0 left-0" />
            <motion.div className="relative flex  items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row ">
              <LayoutTextFlip
                text="What I Can "
                words={["Build", "Deliver", "Offer", "Create"]}
              />
            </motion.div>
          </header>

          {/* MOBILE: swipe carousel */}
          <MobileCarousel />

          {/* DESKTOP: scroll-driven horizontal */}
          <DesktopHorizontal />

          {/* FOOTER STATS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20 py-12 lg:h-[30vh]">
            <div className="text-center text-secondary">
              <h3 className="text-5xl lg:text-7xl font-bold">
                <CountUp
                  from={0}
                  to={13}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h3>
              <p>Projects Completed</p>
            </div>

            <div className="text-center  sm:h-32  flex flex-col justify-center items-center sm:px-12 lg:px-20">
              <h3 className="text-5xl lg:text-7xl font-bold">
                <CountUp
                  from={0}
                  to={7}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h3>
              <p>Happy Clients</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl lg:text-7xl font-bold">
                <CountUp
                  from={0}
                  to={2}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </article>
      </main>
    </ReactLenis>
  );
}
