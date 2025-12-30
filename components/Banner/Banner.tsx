"use client";

import BannerImage from "@/images/banner.png";
import Image from "next/image";
import SplitText from "../SplitText";
import { WordRotate } from "../ui/word-rotate";
import { MapPin, University } from "lucide-react";
import AnimatedContent from "../AnimatedContent";
import { Calendar } from "../ui/calendar";
import Threads from "../Threads";
import { useAppContext } from "@/context/ContextApi";
import LightRays from "../LightRays";

export default function Banner() {
  const words = [
    "Learn • Grow • Lead",
    "A Place to Discover Your Potential",
    "Technology-Driven Academic Excellence",
    "Where Knowledge Meets Opportunity",
    "Empowering Future Leaders",
  ];

  const { muted } = useAppContext();

  return (
    <div className="px-10 h-[850px] absolute top-0 left-0 w-full">
      <div className="banner w-full h-full relative">
        <Image
          src={BannerImage}
          alt="Banner"
          width={2000}
          height={2000}
          quality={100}
          className="w-full h-full object-cover object-top rounded-bl-[150px] rounded-br-[150px]  shadow-lg "
        />
        <div className="h-full w-full bg-linear-to-b from-transparent to-black/60  absolute top-0 rounded-bl-[150px] rounded-br-[150px] overflow-hidden">
          {muted && (
            <div className="h-full">
              {" "}
              <LightRays
                raysOrigin="bottom-center"
                raysSpeed={1}
                lightSpread={2}
                fadeDistance={2}
                saturation={0}
                mouseInfluence={0}
                distortion={0}
                className="custom-rays"
              />
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end px-24 text-white overflow-hidden">
        <div className="flex items-end justify-between w-full z-30">
          <div>
            <SplitText
              text=" Shahid M. Mansur Ali College"
              className="text-5xl leading-[60px]  font-bold "
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
            <AnimatedContent direction="horizontal" reverse delay={1}>
              <h2 className="text-xl font-bold flex items-center gap-2 ">
                <MapPin /> Pabna &nbsp; <University /> Since 1996
              </h2>
            </AnimatedContent>
          </div>
          <div className="relative">
            <Calendar
              mode="single"
              className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)] absolute -bottom-8 right-0"
              buttonVariant="ghost"
            />
          </div>
        </div>
        <div className="text-center pb-12 uppercase text-sm opacity-80 z-30">
          <WordRotate words={words} />
        </div>
      </div>
    </div>
  );
}
