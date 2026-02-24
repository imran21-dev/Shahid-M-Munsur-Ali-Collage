import React from "react";
import FaderImage from "@/images/5367.png";
import Image from "next/image";
import { HeroParallax } from "../ui/hero-parallax";
import CurvedLoop from "../CurvedLoop";

const products = [
  {
    title: "Petopia",
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/mgkdCNST/Picsart-26-02-23-18-52-26-144.jpg",
  },
  {
    title: "Service Scope",
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/j5RKsFz0/Picsart-26-02-23-19-09-07-858.jpg",
  },
  {
    title: "Movie Sphere",
    link: "https://moviesharp-ff843.web.app/",
    github: "https://github.com/imran21-dev/modified-moviesphere",
    thumbnail:
      "https://i.postimg.cc/zXTyX9hF/Picsart-26-02-23-19-17-14-995.jpg",
  },
  {
    title: "Saiful UIUX Portfolio",
    link: "https://saiful-uiux.netlify.app",
    github: "",
    thumbnail:
      "https://i.postimg.cc/dtCWBm7z/Picsart-26-02-23-19-25-40-503.jpg",
  },
  {
    title: "Petopia",
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/vHZR2nvt/Picsart-26-02-23-18-59-52-929.jpg",
  },
  {
    title: "Service Scope",
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/CxfwJDF3/Picsart-26-02-23-19-10-03-842.jpg",
  },
  {
    title: "Movie Sphere",
    link: "https://moviesharp-ff843.web.app/",
    github: "https://github.com/imran21-dev/modified-moviesphere",
    thumbnail:
      "https://i.postimg.cc/CLbRLW84/Picsart-26-02-23-19-18-04-422.jpg",
  },
  {
    title: "Saiful UIUX Portfolio",
    link: "https://saiful-uiux.netlify.app",
    github: "",
    thumbnail:
      "https://i.postimg.cc/gkhMDqwC/Picsart-26-02-23-19-26-15-023.jpg",
  },
  {
    title: "Petopia",
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/44hwfxxd/Picsart-26-02-23-19-04-23-120.jpg",
  },
  {
    title: "Service Scope",
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/k479npWZ/Picsart-26-02-23-19-09-39-825.jpg",
  },
  {
    title: "Movie Sphere",
    link: "https://moviesharp-ff843.web.app/",
    github: "https://github.com/imran21-dev/modified-moviesphere",
    thumbnail:
      "https://i.postimg.cc/sD5MDtW1/Picsart-26-02-23-19-18-32-143.jpg",
  },
  {
    title: "Saiful UIUX Portfolio",
    link: "https://saiful-uiux.netlify.app",
    github: "",
    thumbnail:
      "https://i.postimg.cc/GhDMQJB7/Picsart-26-02-23-19-26-51-089.jpg",
  },
  {
    title: "Petopia",
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/QMH1ffBH/Picsart-26-02-23-19-06-20-252.jpg",
  },
  {
    title: "Service Scope",
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/CxfwJDF3/Picsart-26-02-23-19-10-03-842.jpg",
  },
  {
    title: "Movie Sphere",
    link: "https://moviesharp-ff843.web.app/",
    github: "https://github.com/imran21-dev/modified-moviesphere",
    thumbnail:
      "https://i.postimg.cc/sD5MDtW1/Picsart-26-02-23-19-18-32-143.jpg",
  },
];
export default function Projects() {
  return (
    <div className="py-20 relative pt-96">
      <div className="absolute top-56 left-0 w-full h-full  z-10 overflow-hidden">
        <CurvedLoop
          marqueeText="Web Developer ✦ UI Enthusiast ✦ Problem Solver ✦ Next.js Specialist ✦ Creative Thinker ✦"
          speed={1}
          curveAmount={100}
          direction="right"
          interactive
          className="text-6xl "
        />
      </div>

      <Image
        src={FaderImage}
        alt="Fader"
        width={1000}
        height={1000}
        quality={1000}
        className="absolute -top-1   w-full h-[500px] left-0 z-0 "
      />
      <div className="w-full h-20 bg-linear-to-t from-background via-background/80 to-transparent absolute top-80 left-0"></div>

      <HeroParallax products={products} />
    </div>
  );
}
