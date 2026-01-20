"use client";
import { useState } from "react";
import LaserFlow from "../LaserFlow";
import { Volume2, VolumeX } from "lucide-react";

export default function Banner() {
  const [muted, setMuted] = useState(true);
  return (
    <div className="relative flex justify-center">
      <div className="h-[1300px] absolute top-0 -left-10 w-full -z-10">
        <LaserFlow
          color="#7893E8"
          horizontalSizing={0.6}
          verticalSizing={1.2}
          wispDensity={2}
          wispSpeed={0.1}
          wispIntensity={2}
          flowSpeed={0.5}
          flowStrength={0.15}
          fogIntensity={1}
          fogScale={0.1}
          fogFallSpeed={0.8}
          decay={1.46}
          falloffStart={0.82}
        />
      </div>
      <div className="w-8/12  rounded-2xl overflow-hidden absolute top-[650px] border-5 border-white">
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
    </div>
  );
}
