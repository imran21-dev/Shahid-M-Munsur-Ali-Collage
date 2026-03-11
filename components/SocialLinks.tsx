import React from "react";

import Image from "next/image";
import { Marquee } from "./ui/marquee";
import ImgGithub from "@/images/github.png";
import ImgLinkedin from "@/images/linkedin.png";
import ImgFiverr from "@/images/fiverr.png";
import ImgGmail from "@/images/gmail.png";
import ImgWhatsapp from "@/images/whatsapp.png";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/imran21-dev",
      icon: ImgGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-imran-sorker21/",
      icon: ImgLinkedin,
    },
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/s/DBbxNpy",
      icon: ImgFiverr,
    },
    {
      name: "Gmail",
      url: "mailto:devimran21@gmail.com",
      icon: ImgGmail,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/8801301460344",
      icon: ImgWhatsapp,
    },
  ];

  return (
    <section className="relative containe_r">
      <h4 className="font-medium text-lg z-10  relative opacity-50 pb-4 flex items-center gap-2 ">
        <div className="w-1 h-3 rounded-sm bg-secondary " />
        Find me on
      </h4>
      <Marquee pauseOnHover className="[--duration:100s] ">
        <div className="flex items-center">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              className="flex items-center gap-2 px-2 md:px-4 cursor-pointer opacity-50 hover:opacity-100 grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out "
              href={link.url}
              target="_blank"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={1000}
                height={1000}
                className="w-5 lg:w-8 "
              />
              <span className="text-xl lg:text-3xl font-semibold opacity-80">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </Marquee>
      <div className="from-background  pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r xl:ml-[18.3%] ml-5 md:ml-[10%] "></div>
      <div className="from-background  pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l xl:mr-[18.3%] mr-5 md:mr-[10%]"></div>
    </section>
  );
}
