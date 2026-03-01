import Image from "next/image";
import { AnimatedBeamDemo } from "./SkillsBeam";
import background from "@/images/3842.jpg";
import backgroundFader from "@/images/Untitled-1.png";
import Button2 from "../Button2";
import { Dot } from "lucide-react";

export default function Skills() {
  return (
    <div id="skills" className=" text-background relative bg-foreground">
      <Image
        src={backgroundFader}
        alt="Fader"
        width={1000}
        height={1000}
        quality={100}
        className="absolute -top-1px w-full h-52 left-0 z-10 mix-blend-multiply "
      />
      <Image
        src={background}
        alt="Background gradient"
        width={1000}
        height={1000}
        quality={100}
        className="absolute top-0 right-0 z-0 size-full object-cover object-center  pointer-events-none select-none "
      />
      <div className="bg-linear-to-t from-white to-transparent h-44 absolute bottom-0 left-0 w-full z-10" />
      <div className="bg-foreground/5 backdrop-blur-3xl px-[18.3%] py-40 ">
        <h3 className="text-7xl font-semibold text-center">
          Tech Stack Mastery
        </h3>
        <p className="pt-4 opacity-80 text-center">
          Unlocking digital possibilities through innovative coding, mastering
          cutting-edge technologies, transforming ideas into seamless
          applications, crafting intuitive experiences, and building the future
          with precision, creativity, and expertise, one line of code at a time.
        </p>

        <AnimatedBeamDemo />
      </div>
      <div className="flex justify-between absolute z-20 w-full px-[18.3%] bottom-10 left-0">
        <ul className="flex text-sm font-semibold pt-2 w-md">
          <li className="flex">
            Code <Dot className="opacity-30" />
          </li>
          <li className="flex">Create</li>
          <li className="flex">
            <Dot className="opacity-30" /> Inspire
          </li>
        </ul>
        <Button2 />
        <h5 className="text-xs opacity-50 font-light max-w-md text-right">
          A showcase of my expertise and tools of the trade, reflecting my
          journey in mastering technology and design. These skills drive my
          creativity and innovation in every project.
        </h5>
      </div>
    </div>
  );
}
