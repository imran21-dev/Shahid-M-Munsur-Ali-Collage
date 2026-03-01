"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import img from "@/images/seo.svg";
import img2 from "@/images/deploy.svg";
import img3 from "@/images/frontend.svg";
import img4 from "@/images/responsive.svg";
import img5 from "@/images/backend.svg";

import CountUp from "../CountUp";

export default function HorizontalScroll() {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ulRef.current) return;
      const section = ulRef.current.closest("section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // scroll progress 0 → 1
      const progress = Math.min(
        Math.max(-rect.top / (sectionHeight - windowHeight), 0),
        1,
      );

      // move ul horizontally
      ulRef.current.style.transform = `translateX(-${progress * (ulRef.current.scrollWidth - window.innerWidth)}px)`;

      // optional: animate headers for parallax
      const headers = ulRef.current.querySelectorAll("h2");
      headers.forEach((header) => {
        (header as HTMLElement).style.transform =
          `translateX(${800 - progress * 1600}px)`; // 800 → -800px
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ReactLenis root>
      <main id="services">
        <article>
          {/* HEADER */}
          <header className=" relative w-full  grid place-content-center h-[80vh]">
            <div className="absolute z-0 inset-0 bg-[linear-gradient(to_left,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_40%_100%_at_50%_0%,#000_50%,transparent_100%)]" />
            <div className="h-2/4 w-full bg-linear-to-b from-background via-background/50 to-transparents absolute top-0 left-0" />
            <motion.div className="relative flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
              <LayoutTextFlip
                text="What I Can "
                words={["Build For You", "Deliver", "Offer", "Create"]}
              />
            </motion.div>
          </header>

          {/* HORIZONTAL SCROLL SECTION */}
          <section className="relative w-screen h-[500vh]">
            <ul ref={ulRef} className="flex h-screen w-[500vw] sticky top-0">
              <li className="h-screen w-screen bg-red-600 flex flex-col justify-center items-center overflow-hidden relative">
                <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold relative  text-black">
                  FRONTEND <br /> DEV
                </h2>

                <Image
                  src={img3}
                  width={500}
                  height={500}
                  className="2xl:w-[550px] w-[380px]  object-cover absolute bottom-0 left-2/3"
                  alt="Frontend Development"
                />
              </li>

              <li className="h-screen w-screen bg-blue-500 flex flex-col justify-center items-center overflow-hidden relative">
                <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold relative  text-black">
                  RESPONSIVE <br /> WEB
                </h2>
                <Image
                  src={img4}
                  width={500}
                  height={500}
                  className="2xl:w-[550px] w-[380px]  object-cover absolute bottom-0 left-2/3"
                  alt="Responsive Web Design"
                />
              </li>

              <li className="h-screen w-screen bg-green-400 flex flex-col justify-center items-center overflow-hidden relative">
                <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold relative  text-black">
                  SEO & SPEED
                </h2>
                <Image
                  src={img}
                  width={500}
                  height={500}
                  className="2xl:w-[550px] w-[380px]  object-cover absolute bottom-0 left-2/3"
                  alt="SEO & Speed Optimization"
                />
              </li>

              <li className="h-screen w-screen bg-yellow-400 flex flex-col justify-center items-center overflow-hidden relative">
                <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold relative  text-black">
                  DEPLOY <br /> <span className="ml-96">MENT</span>
                </h2>
                <Image
                  src={img2}
                  width={500}
                  height={500}
                  className="2xl:w-[550px] w-[380px]  object-cover absolute bottom-0 left-2/3"
                  alt="Deployment"
                />
              </li>

              <li className="h-screen w-screen bg-purple-400 flex flex-col justify-center items-center overflow-hidden relative">
                <h2 className="text-[20vw] z-10 leading-[20vw] font-semibold relative text-right text-black">
                  <span className="ml-96"> BACK</span> <br />
                  END
                </h2>
                <Image
                  src={img5}
                  width={500}
                  height={500}
                  className="2xl:w-[550px] w-[380px]  object-cover absolute bottom-0 left-2/3"
                  alt="Backend Development"
                />
              </li>
            </ul>
          </section>

          {/* FOOTER */}

          <div className="flex justify-center items-center gap-20 h-[30vh]">
            <div className="text-center text-secondary">
              <h3 className="text-7xl font-bold ">
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
            <div className="text-center  border-x-10 h-full border-purple-400  flex flex-col justify-center items-center px-20">
              <h3 className="text-7xl font-bold">
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
              <h3 className="text-7xl font-bold">
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
