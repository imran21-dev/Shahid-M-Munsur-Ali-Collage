import Image from "next/image";
import { AnimatedBeamDemo } from "./SkillsBeam";
import background from "@/images/3842.jpg";
import backgroundFader from "@/images/Untitled-1.png";
import SkillContactButton from "../SkillContactButton";

export default function Skills() {
  return (
    <div className=" text-background relative bg-foreground">
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
      <div className=" bg-foreground/5 backdrop-blur-3xl px-[18.3%] py-40 ">
        <h2 className="text-7xl font-semibold text-center">
          Tech Stack Mastery
        </h2>
        <p className="pt-4 opacity-80 text-center">
          Unlocking digital possibilities through innovative coding, mastering
          cutting-edge technologies, transforming ideas into seamless
          applications, crafting intuitive experiences, and building the future
          with precision, creativity, and expertise, one line of code at a time.
        </p>

        <AnimatedBeamDemo />
        <SkillContactButton />
      </div>
    </div>
  );
}
