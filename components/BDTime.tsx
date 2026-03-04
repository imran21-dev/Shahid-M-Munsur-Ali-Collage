"use client";

import { Clock } from "lucide-react";
import { JSX, useEffect, useState } from "react";

type TimeState = {
  h: string;
  m: string;
  s: string;
};

export default function BDTime(): JSX.Element {
  const [time, setTime] = useState<TimeState>({
    h: "",
    m: "",
    s: "",
  });

  useEffect((): (() => void) => {
    const update = (): void => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).formatToParts(new Date());

      setTime({
        h: parts.find((p) => p.type === "hour")?.value ?? "",
        m: parts.find((p) => p.type === "minute")?.value ?? "",
        s: parts.find((p) => p.type === "second")?.value ?? "",
      });
    };

    update();
    const i = setInterval(update, 1000);
    return (): void => clearInterval(i);
  }, []);

  return (
    <div className={`flex flex-col text-center md:w-48 `}>
      <span className="text-5xl xl:text-9xl font-bold leading-5 xl:leading-20">
        {time.h}
      </span>

      <span className="text-xs xl:text-lg md:font-semibold opacity-80 py-2 xl:pb-2 text-secondary">
        {time.s}
      </span>
      <span className="text-5xl xl:text-9xl font-bold leading-5 xl:leading-20  text-secondary">
        {time.m}
      </span>

      <h5 className="ml-1 text-[9px] xl:text-xs opacity-80  flex items-center justify-center gap-0.5 pt-1 xl:pt-2 text-secondary">
        <Clock className="w-2 xl:w-4 " />
        <span className="pt-0.5"> BD</span>
      </h5>
    </div>
  );
}
