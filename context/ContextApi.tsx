"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AppContextType = {
  on: boolean;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
};

const AppContext = createContext<AppContextType | null>(null);
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect((): (() => void) => {
    let timer: ReturnType<typeof setTimeout>;
    let active = true;

    const blink = (): void => {
      if (!active) return;

      // Fast + irregular like router signal
      const delay: number = Math.random() * 250 + 80; // 80ms – 330ms

      timer = setTimeout(() => {
        setOn(Math.random() > 0.35); // random ON/OFF pattern
        blink();
      }, delay);
    };

    blink();

    return (): void => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  const value = { on, isLoading, setIsLoading };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used inside AppProvider");
  return context;
}
