import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/ContextApi";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import LayoutContent from "@/context/Layoutcontent";

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devimranx.netlify.app"),
  title: {
    default: "Dev Imran | Full Stack Developer",
    template: "%s | Dev Imran",
  },
  icons: {
    icon: "/favicon-01.jpg",
  },
  description: "Portfolio of Dev Imran — Full Stack Developer.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  const theme = localStorage.getItem("theme")
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
})();
`,
          }}
        />
      </head>
      <body className={`${dm_sans.className} max-w-[1920px] mx-auto `}>
        <AppProvider>
          <LoadingScreen />
          <LayoutContent>{children}</LayoutContent>
        </AppProvider>
      </body>
    </html>
  );
}
