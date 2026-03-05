"use client";
import { useAppContext } from "@/context/ContextApi";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

// Separate client wrapper so layout.tsx can stay a server component
export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useAppContext();

  return (
    <>
      {!isLoading && <Navbar />}
      {!isLoading && children}
      {!isLoading && <Footer />}
      <Toaster />
    </>
  );
}
