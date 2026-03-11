import AboutPageAccordion from "@/components/AboutPageAccordion";
import SocialLinks from "@/components/SocialLinks";
import myImg from "@/images/about-img.png";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://devimranx.netlify.app"),

  title: "About Me | Dev Imran",
  description:
    "Hi, I'm Imran Sorker — a Web Developer with 2 years of experience specializing in React, Next.js and Node.js. Learn more about my background and journey.",
  keywords: [
    "Dev Imran",
    "Imran Sorker",
    "About Dev Imran",
    "Web Developer Bangladesh",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer Bangladesh",
    "Software Engineer Bangladesh",
  ],
  authors: [{ name: "Dev Imran", url: "https://devimranx.netlify.app" }],
  creator: "Dev Imran",
  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Me | Dev Imran",
    description:
      "Hi, I'm Imran Sorker — a Web Developer with 2 years of experience. Available for new projects.",
    url: "https://devimranx.netlify.app/about",
    siteName: "Dev Imran Portfolio",
    images: [
      {
        url: "/og-about.png", // create this 1200x630px
        width: 1200,
        height: 630,
        alt: "About Dev Imran - Web Developer",
      },
    ],
    locale: "en_US",
    type: "profile", // ✅ profile is correct for About page
  },

  twitter: {
    card: "summary_large_image",
    title: "About Me | Dev Imran",
    description:
      "Hi, I'm Imran Sorker — a Web Developer with 2 years of experience. Available for new projects.",
    creator: "@MdImranPar3534",
    images: ["/og-about.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Imran Sorker",
    alternateName: "Dev Imran",
    url: "https://devimranx.netlify.app",
    jobTitle: "Web Developer",
    description:
      "Web Developer with 2 years of experience specializing in React, Next.js and Node.js",
    image: "https://i.postimg.cc/44YPfBPR/about-og.png",
    sameAs: [
      "https://github.com/imran21-dev",
      "https://linkedin.com/in/md-imran-sorker21",
      "https://twitter.com/MdImranPar3534",
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-10 lg:py-20">
        <div className="containe_r flex flex-col lg:flex-row items-center  lg:gap-20">
          <div className="lg:w-2/5">
            <Image
              src={myImg}
              alt="Dev Imran Image"
              width={1000}
              height={1000}
              quality={100}
              className="w-full md:w-3/4 lg:w-full mx-auto rounded-t-full "
            />
          </div>

          <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .acc-body { max-height: 0; overflow: hidden; transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1); }
        .acc-body.open { max-height: 200px; }
        .acc-icon { display:inline-block; transition: transform 0.3s; }
        .acc-icon.open { transform: rotate(90deg); }
        .acc-chevron { display:inline-block; transition: transform 0.3s, color 0.2s; }
        .acc-chevron.open { transform: rotate(180deg); }
        .status-dot { animation: pulse-dot 2s infinite; }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.35} }
        .acc-trigger:hover .acc-trigger-bg { background: #16161c; }
      `}</style>

            <div
              className="lg:w-3/5 lg:min-h-screen -mt-36 lg:mt-0"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="overflow-hidden">
                {/* ── Header ── */}
                <div
                  className="lg:px-6 lg:pt-6 pb-5"
                  style={{ borderBottom: "1px solid #1a1a20" }}
                >
                  <span
                    className="font-dm inline-block mb-3 rounded-full px-3 py-1"
                    style={{
                      color: "#5a5a72",
                      background: "#18181f",
                      border: "1px solid #222230",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Portfolio · About
                  </span>

                  <div className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight">
                    Hello,
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight mt-1">
                    I&apos;m Imran
                  </div>
                  <div className="text-5xl md:text-6xl text-secondary font-extrabold leading-none tracking-tight mt-1">
                    Sorker
                  </div>

                  <p
                    className="mt-3 font-dm font-light"
                    style={{ fontSize: 13, color: "#4a4a5e" }}
                  >
                    Web Developer · 2 Years Experience
                  </p>
                </div>

                {/* ── Accordion ── */}
                <AboutPageAccordion />

                {/* ── Footer ── */}
                <div
                  className="px-4 py-3 flex items-center gap-2"
                  style={{ borderTop: "1px solid #1a1a20" }}
                >
                  <div
                    className="status-dot rounded-full shrink-0"
                    style={{
                      width: 6,
                      height: 6,
                      background: "#4caf7d",
                      boxShadow: "0 0 6px #4caf7d",
                    }}
                  />
                  <span
                    className="font-dm font-light"
                    style={{
                      fontSize: 11,
                      color: "#3a3a50",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </>
        </div>
        <SocialLinks />
      </div>
    </>
  );
}
