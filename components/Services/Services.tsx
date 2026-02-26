"use client";
import { motion } from "motion/react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import MagicBento from "../MagicBento";
import bgImg from "@/images/2148133106.jpg";
import Image from "next/image";
import { Dot } from "lucide-react";
import { useAppContext } from "@/context/ContextApi";

export default function Services() {
  const { on } = useAppContext();

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-full ">
        <Image
          src={bgImg}
          alt="bg Image"
          width={1920}
          height={1080}
          className="h-full mix-blend-lighten opacity-60"
        />
      </div>
      <div className="px-[18.3%] relative z-10">
        <motion.div className="relative flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="What I Can "
            words={["Build For You", "Deliver", "Offer", "Create"]}
          />
        </motion.div>

        <p className="pt-6 pb-10 opacity-80 text-center">
          I transform ideas into powerful web applications using modern
          technologies like React, Next.js, Node.js, and MongoDB. Whether you
          need a business website, a custom dashboard, or a full-stack
          application, I deliver clean code, smooth performance, and reliable
          results.
        </p>

        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt
          enableMagnetism
          clickEffect={false}
          spotlightRadius={270}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />

        <div className="flex items-end flex-col-reverse justify-between w-full px-5">
          <div className="flex gap-2">
            <div className="flex items-center pt-1.5 ">
              <span
                className={`size-1 rounded-full 
        ${on ? "bg-[#22C55E] shadow-[0_0_25px_4px_#22C55E,0_0_0px_0px_rgba(34,197,94,0.8)]" : ""}`}
              />
            </div>
            <ul className="flex justify-center text-sm font-semibold pt-2 text-background">
              <li className="flex">
                Create <Dot className="opacity-30" />
              </li>
              <li className="flex">Optimize</li>
              <li className="flex">
                <Dot className="opacity-30" /> Elevate
              </li>
            </ul>
          </div>
          <h5 className="text-xs font-semibold    text-right text-background ">
            From concept to deployment, I handle everything with precision and
            care. <br /> All you need to do is share your idea — I’ll handle the
            rest.
          </h5>
        </div>
      </div>
    </div>
  );
}
