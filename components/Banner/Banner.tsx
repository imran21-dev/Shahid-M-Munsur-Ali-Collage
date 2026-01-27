"use client";
import { useState } from "react";

import { Dot, Volume2, VolumeX } from "lucide-react";
import Button from "../Button";

export default function Banner() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="pb-10">
      <video src="/banner.mp4" autoPlay loop muted className="w-full"></video>
      <section className="px-[18.3%] absolute top-[200px] w-full">
        <div className="w-2/4">
          <h1 className="text-[80px] leading-20 font-semibold  ">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-[#E3E5F9]">
              Where Design
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-foreground to-[#D9DBF7]">
              Meets Code
            </span>
          </h1>
          <p className="pt-4">
            Passionate web developer blending clean design with powerful code to
            build modern, high-quality web experiences.
          </p>
          <div className="pt-8">
            <Button />
          </div>
        </div>

        <div className="absolute top-[522px] ">
          <section className="w-[1017px] relative rounded-lg overflow-hidden">
            <video
              id="introVideo"
              className={` ${muted ? "grayscale" : ""} transition-all duration-500`}
              src="/intro.mp4"
              autoPlay
              loop
              muted={muted}
              playsInline
            />
            <button
              onClick={() => setMuted(!muted)}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 absolute bottom-4 right-4 hover:border-white/30 transition-colors cursor-pointer z-30"
            >
              {muted ? <VolumeX /> : <Volume2 />}
            </button>
          </section>

          <div className="pt-8  z-10 relative ">
            <h3 className="text-sm opacity-50 font-light">
              Everything You Need to Build Modern Web Experiences
            </h3>
            <ul className="flex text-sm font-semibold pt-2 ">
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
      </section>
    </div>
  );
}
