"use client";
import { useRef, useState } from "react";

import { Dot, Volume2, VolumeX } from "lucide-react";
import Button from "../Button";
import BDTime from "../BDTime";

export default function Banner() {
  const [muted, setMuted] = useState(true);
  const [buffering, setBuffering] = useState(true);

  return (
    <div id="home" className="pb-10 relative max-w-svw overflow-hidden">
      <section className="absolute top-0 left-0 md:left-20 lg:left-0 xl:left-0  xl:scale-100 lg:scale-[130%] md:scale-[160%] scale-[220%] origin-top">
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          className="md:h-full w-full object-cover "
        ></video>
        <section className="w-[53.4%] left-[18.3%] bottom-[9.3%] absolute rounded-xs md:rounded-sm xl:rounded-lg overflow-hidden">
          {/* Spinner overlay */}
          {buffering && (
            <div className="absolute inset-0 z-40 flex items-center justify-center ">
              <div className="relative size-5 md:size-10">
                {/* Track */}
                <svg
                  className="absolute inset-0 -rotate-90"
                  viewBox="0 0 40 40"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="25 75"
                    className="animate-spin origin-center"
                    style={{ animationDuration: "800ms" }}
                  />
                </svg>
              </div>
            </div>
          )}

          <video
            id="introVideo"
            className={`w-full h-full ${muted ? "grayscale" : ""} transition-all duration-500`}
            src="/intro.mp4"
            autoPlay
            loop
            muted={muted}
            playsInline
            onWaiting={() => setBuffering(true)}
            onPlaying={() => setBuffering(false)}
            onCanPlay={() => setBuffering(false)}
          />
          <button
            onClick={() => setMuted(!muted)}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1 md:p-1.5 xl:p-2 absolute xl:bottom-4 md:bottom-2 xl:right-4 md:right-2 bottom-1 right-1 hover:border-white/30 transition-colors cursor-pointer z-30"
          >
            {muted ? (
              <VolumeX className="size-2 md:size-3 xl:size-6" />
            ) : (
              <Volume2 className="size-2 md:size-3 xl:size-6" />
            )}
          </button>
        </section>
        <div className="z-10 absolute -bottom-1 xl:bottom-[3%]  origin-right  w-full flex flex-col items-center md:items-start md:pl-[18.3%]">
          <h3 className="text-[10px] xl:text-sm opacity-50 font-light scale-50 md:scale-100">
            Everything You Need to Build Modern Web Experiences
          </h3>
          <ul className="flex text-[10px] xl:text-sm font-semibold -mt-2 md:mt-0 md:pt-0 xl:pt-2 scale-50 md:scale-100">
            <li className="flex items-center">
              Design <Dot className="opacity-30 " />
            </li>
            <li className="flex items-center">Code</li>
            <li className="flex items-center">
              <Dot className="opacity-30" /> Build
            </li>
          </ul>
        </div>

        <div className="absolute hidden lg:block right-36 bottom-[18%]">
          <BDTime />
        </div>
      </section>
      <section className="containe_r pt-20 md:pt-28 xl:pt-44 w-full pb-[100%] md:pb-[50%]">
        <div className="xl:w-3/4 relative">
          <h1 className="text-4xl md:text-6xl xl:text-[85px] xl:leading-20 ">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-[#E3E5F9]">
              Where Design <br />
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-foreground to-[#D9DBF7]">
              Meets Code
            </span>
          </h1>
          <p className="pt-1 xl:pt-4 text-sm md:text-base w-full md:w-2/4 xl:w-2/4">
            Passionate web developer blending clean design with powerful code to
            build modern, high-quality web experiences.
          </p>
          <div className="pt-4 md:pt-8">
            <Button label="Connect with me" targetId="contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
