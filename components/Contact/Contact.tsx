import React from "react";
import { PointerHighlight } from "../ui/pointer-highlight";
import Card from "./Card";

export default function Contact() {
  return (
    <div className="py-40">
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
      <div className="px-[18.3%] py-20 flex items-center justify-between relative">
        <h3>hello</h3>
        <Card />
      </div>
    </div>
  );
}
