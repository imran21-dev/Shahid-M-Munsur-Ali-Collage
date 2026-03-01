import React from "react";
import { PointerHighlight } from "../ui/pointer-highlight";
import Card from "./Card";
import { AlarmClockCheck, Globe } from "lucide-react";
import WorldMap from "../ui/world-map";
import ImgGithub from "@/images/github.png";
import ImgLinkedin from "@/images/linkedin.png";
import ImgFiverr from "@/images/fiverr.png";
import ImgGmail from "@/images/gmail.png";
import ImgWhatsapp from "@/images/whatsapp.png";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

export default function Contact() {
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
    <div id="contact" className="pt-40">
      <h3 className="text-7xl font-semibold text-center flex items-center justify-center gap-3">
        <span> Get in </span>
        <PointerHighlight
          rectangleClassName="bg-foreground/5 dark:border-foreground/20 "
          pointerClassName="text-secondary"
        >
          <span className="relative z-10 text-secondary">Touch</span>
        </PointerHighlight>
      </h3>
      <p className="mt-6 pb-10 opacity-80 text-center w-2/4 mx-auto">
        Have a project, idea, or question? I’m always open to discussing new
        opportunities and collaborations. Let’s connect and make something
        amazing together.
      </p>
      <div className="px-[18.3%] py-20  relative">
        <section className="flex items-center justify-between pb-40">
          <div>
            <h3 className="text-3xl font-semibold">
              Do you have any project in mind?
            </h3>
            <p>
              I’m always open to discussing new opportunities and collaborations
            </p>
            <ul className="text-sm mt-4 opacity-80">
              <li className="flex items-center gap-2">
                <AlarmClockCheck className="w-4 " /> Typically respond within 24
                hours.
              </li>
              <li className="flex items-center gap-2 ">
                <Globe className="w-4 " /> Available for remote work worldwide.
              </li>
            </ul>

            <div className="pt-10">
              <WorldMap
                dots={[
                  {
                    start: { lat: 23.8103, lng: 90.4125 }, // Dhaka, Bangladesh
                    end: { lat: 40.7128, lng: -74.006 }, // New York, USA
                  },

                  {
                    start: { lat: 23.8103, lng: 90.4125 },
                    end: { lat: 51.5074, lng: -0.1278 }, // London, UK
                  },

                  {
                    start: { lat: 23.8103, lng: 90.4125 },
                    end: { lat: 1.3521, lng: 103.8198 }, // Singapore
                  },
                  {
                    start: { lat: 23.8103, lng: 90.4125 },
                    end: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
                  },
                  {
                    start: { lat: 23.8103, lng: 90.4125 },
                    end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
                  },

                  {
                    start: { lat: 23.8103, lng: 90.4125 },
                    end: { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brazil
                  },
                  {
                    start: { lat: 23.8103, lng: 90.4125 },
                    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
                  },
                ]}
              />
            </div>
          </div>
          <Card />
        </section>
        <section className="relative">
          <h4 className="font-medium text-lg z-10  relative opacity-50 pb-4 flex items-center gap-2">
            <div
              className="w-1 h-3 rounded-sm bg-secondary
           "
            />{" "}
            Find me on
          </h4>
          <Marquee pauseOnHover className="[--duration:100s]">
            <div className="flex items-center ">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  className="flex items-center gap-2 px-4 cursor-pointer opacity-50 hover:opacity-100 grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out "
                  href={link.url}
                  target="_blank"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={1000}
                    height={1000}
                    className="w-8 "
                  />
                  <span className="text-3xl font-semibold opacity-80">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </Marquee>
          <div className="from-background  pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r"></div>
          <div className="from-background  pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l"></div>
        </section>
      </div>
    </div>
  );
}
