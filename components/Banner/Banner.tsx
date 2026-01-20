"use client";
import { useState } from "react";
import LaserFlow from "../LaserFlow";
import { Dot, Volume2, VolumeX } from "lucide-react";
import Button from "../Button";

export default function Banner() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative flex ">
      <div className="h-[1300px] relative overflow-hidden  top-0 -left-10 w-full -z-10">
        <LaserFlow
          color="#7893E8"
          horizontalSizing={0.59}
          verticalSizing={1.5}
          wispDensity={2}
          wispSpeed={0.1}
          wispIntensity={2}
          flowSpeed={0.5}
          flowStrength={0.15}
          fogIntensity={1}
          fogScale={0.1}
          fogFallSpeed={0.8}
          decay={1.46}
          falloffStart={1.3}
        />
      </div>

      <div className="absolute top-[200px] left-0 w-2/4">
        <h1 className="text-7xl font-semibold ">Where Design Meets Code</h1>
        <p className="pt-4">
          Passionate web developer blending clean design with powerful code to
          build modern, high-quality web experiences.
        </p>
        <div className="pt-8">
          <Button />
        </div>
      </div>

      <div className="absolute top-[650px] w-10/12 ">
        <div className=" rounded-2xl overflow-hidden w-full relative ">
          <video
            id="introVideo"
            className={`w-full ${muted ? "grayscale" : ""} transition-all duration-500`}
            src="/intro.mp4"
            autoPlay
            loop
            muted={muted}
            playsInline
          />
          <button
            onClick={() => setMuted(!muted)}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 absolute bottom-4 right-4 hover:border-white/30 transition-colors cursor-pointer"
          >
            {muted ? <VolumeX /> : <Volume2 />}
          </button>
        </div>
        <div className="bg-linear-to-b from-background/0 via-background/60 to-background pt-28 -mt-20 z-10 relative ">
          <h3 className="text-sm opacity-50 font-light">
            Everything You Need to Build Modern Web Experiences
          </h3>
          <ul className="flex text-sm font-semibold pt-2 pb-20">
            <li className="flex">
              Design <Dot className="opacity-30" />
            </li>
            <li className="flex">Code</li>
            <li className="flex">
              <Dot className="opacity-30" /> Build
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
