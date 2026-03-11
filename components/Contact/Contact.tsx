import React from "react";
import { PointerHighlight } from "../ui/pointer-highlight";
import Card from "./Card";
import { AlarmClockCheck, Globe } from "lucide-react";
import WorldMap from "../ui/world-map";
import SocialLinks from "../SocialLinks";

export default function Contact() {
  return (
    <div id="contact" className="pt-20 md:pt-32 lg:pt-40">
      <h3 className="text-4xl md:text-5xl lg:text-7xl text-center flex items-center justify-center gap-3">
        <span> Get in </span>
        <PointerHighlight
          rectangleClassName="bg-foreground/5 dark:border-foreground/20 "
          pointerClassName="text-secondary"
        >
          <span className="relative z-10 text-secondary">Touch</span>
        </PointerHighlight>
      </h3>
      <p className="containe_r mt-4 md:mt-6 pb-5 md:pb-10 opacity-80 text-center text-sm md:text-base xl:w-8/12 mx-auto">
        Have a project, idea, or question? I’m always open to discussing new
        opportunities and collaborations. Let’s connect and make something
        amazing together.
      </p>
      <div className=" py-5 md:py-20 overflow-hidden md:overflow-visible relative">
        <section className="flex xl:flex-row flex-col items-center justify-between  pb-20 md:pb-32 lg:pb-40 containe_r">
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl ">
              Do you have any project in mind?
            </h3>
            <p className="text-sm md:text-base">
              I’m always open to discussing new opportunities and collaborations
            </p>
            <ul className="text-xs md:text-sm mt-2 md:mt-4 opacity-80">
              <li className="flex items-center gap-1 md:gap-2">
                <AlarmClockCheck className="w-3 md:w-4 " /> Typically respond
                within 24 hours.
              </li>
              <li className="flex items-center gap-1 md:gap-2 ">
                <Globe className="w-3 md:w-4 " /> Available for remote work
                worldwide.
              </li>
            </ul>

            <div className="pt-0 md:pt-10 -mt-24 md:-mt-32 xl:mt-0">
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
        <SocialLinks />
      </div>
    </div>
  );
}
