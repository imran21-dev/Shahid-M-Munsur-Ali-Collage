"use client";
import { motion } from "motion/react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import MagicBento from "../MagicBento";

export default function Services() {
  return (
    <div>
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
      </div>
    </div>
  );
}
