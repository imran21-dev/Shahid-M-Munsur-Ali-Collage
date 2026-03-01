import React from "react";
import FaderImage from "@/images/5367.png";
import Image from "next/image";
import { HeroParallax } from "../ui/hero-parallax";
import CurvedLoop from "../CurvedLoop";
import { ArrowRight } from "lucide-react";
import styled from "styled-components";

const products = [
  {
    title: "Petopia",
    idx: 1,
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/mgkdCNST/Picsart-26-02-23-18-52-26-144.jpg",
  },
  {
    title: "Service Scope",
    idx: 2,
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/j5RKsFz0/Picsart-26-02-23-19-09-07-858.jpg",
  },
  {
    title: "Movie Sphere",
    idx: 3,
    link: "https://moviesharp-ff843.web.app/",
    github: "https://github.com/imran21-dev/modified-moviesphere",
    thumbnail:
      "https://i.postimg.cc/zXTyX9hF/Picsart-26-02-23-19-17-14-995.jpg",
  },
  {
    title: "Saiful UIUX Portfolio",
    idx: 4,
    link: "https://saiful-uiux.netlify.app",
    github: "",
    thumbnail:
      "https://i.postimg.cc/dtCWBm7z/Picsart-26-02-23-19-25-40-503.jpg",
  },
  {
    title: "Petopia",
    idx: 5,
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/vHZR2nvt/Picsart-26-02-23-18-59-52-929.jpg",
  },
  {
    title: "Service Scope",
    idx: 6,
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/CxfwJDF3/Picsart-26-02-23-19-10-03-842.jpg",
  },
  {
    title: "Movie Sphere",
    idx: 7,
    link: "https://moviesharp-ff843.web.app/",
    github: "https://github.com/imran21-dev/modified-moviesphere",
    thumbnail:
      "https://i.postimg.cc/CLbRLW84/Picsart-26-02-23-19-18-04-422.jpg",
  },
  {
    title: "Saiful UIUX Portfolio",
    idx: 8,
    link: "https://saiful-uiux.netlify.app",
    github: "",
    thumbnail:
      "https://i.postimg.cc/gkhMDqwC/Picsart-26-02-23-19-26-15-023.jpg",
  },
  {
    title: "Petopia",
    idx: 9,
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/44hwfxxd/Picsart-26-02-23-19-04-23-120.jpg",
  },
  {
    title: "Service Scope",
    idx: 10,
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/k479npWZ/Picsart-26-02-23-19-09-39-825.jpg",
  },
  {
    title: "Movie Sphere",
    idx: 11,
    link: "https://moviesharp-ff843.web.app/",
    github: "https://github.com/imran21-dev/modified-moviesphere",
    thumbnail:
      "https://i.postimg.cc/sD5MDtW1/Picsart-26-02-23-19-18-32-143.jpg",
  },
  {
    title: "Saiful UIUX Portfolio",
    idx: 12,
    link: "https://saiful-uiux.netlify.app",
    github: "",
    thumbnail:
      "https://i.postimg.cc/GhDMQJB7/Picsart-26-02-23-19-26-51-089.jpg",
  },
  {
    title: "Petopia",
    idx: 13,
    link: "https://petopia-f7bab.web.app/",
    github: "https://github.com/imran21-dev/petopia-modified",
    thumbnail:
      "https://i.postimg.cc/QMH1ffBH/Picsart-26-02-23-19-06-20-252.jpg",
  },
  {
    title: "Service Scope",
    idx: 14,
    link: "https://service-scope-6413b.web.app/",
    github: "https://github.com/imran21-dev/ServiceScope",
    thumbnail:
      "https://i.postimg.cc/CxfwJDF3/Picsart-26-02-23-19-10-03-842.jpg",
  },
  {
    title: "Movie Sphere",
    idx: 15,
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
      <div className="relative z-20 w-full flex justify-center -mt-20 ">
        <StyledWrapper>
          <button className="flex items-center gap-2">
            Start a project <ArrowRight />
            <div className="star-3">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 784.11 815.53"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"
                  />
                </g>
              </svg>
            </div>
          </button>
        </StyledWrapper>
      </div>
    </div>
  );
}
const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 6px 35px;
    background: #000000;

    font-size: 14px;
    font-weight: 600;
    color: #f26d44;
    box-shadow: none;
    border-radius: 100px;

    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .star-3 {
    position: absolute;
    top: 40%;
    left: 5%;
    width: 10px;
    height: auto;
    filter: drop-shadow(0 0 10px #f26d44);
    z-index: 2;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  button:hover .star-3 {
    transform: rotate(180deg) scale(1.5);
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  button:hover {
    gap: 50px;
    padding-right: 5px;
    transition: all 0.3s ease-in-out;
  }

  .fil0 {
    fill: #f26d44;
  }
`;
