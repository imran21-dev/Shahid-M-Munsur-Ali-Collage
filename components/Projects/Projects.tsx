import React from "react";
import FaderImage from "@/images/5367.png";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="px-[18.3%] py-20 relative pt-96">
      <Image
        src={FaderImage}
        alt="Fader"
        width={1000}
        height={1000}
        quality={1000}
        className="absolute -top-1  w-full h-[500px]  left-0 z-10 mix-blend-screen"
      />
      <h4 className="text-7xl font-semibold">Projects</h4>
    </div>
  );
}
