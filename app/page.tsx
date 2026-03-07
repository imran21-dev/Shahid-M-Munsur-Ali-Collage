import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import HorizontalScroll from "@/components/Services/HorizontalScroll";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://devimranx.netlify.app"),

  title: "Dev Imran | Full Stack Developer",
  description:
    "Hi, I'm Imran — a Full Stack Developer specializing in React, Next.js, and Node.js. Explore my skills, projects, services, and get in touch.",
  icons: {
    icon: "/favicon-01.jpg",
  },
  keywords: [
    "Dev Imran",
    "Full Stack Developer Bangladesh",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Software Engineer Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Dev Imran", url: "https://devimranx.netlify.app" }],
  creator: "Dev Imran",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dev Imran | Full Stack Developer",
    description:
      "Explore my skills, projects, services and testimonials. Available for freelance and full-time opportunities.",
    url: "https://devimranx.netlify.app",
    siteName: "Dev Imran Portfolio",
    images: [
      {
        url: "/og-home.png", // 1200x630px
        width: 1200,
        height: 630,
        alt: "Dev Imran - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dev Imran | Full Stack Developer",
    description: "Explore my skills, projects, services and testimonials.",
    creator: "@MdImranPar3534",
    images: ["/og-home.png"],
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
  "@type": "Person",
  name: "Dev Imran",
  url: "https://devimranx.netlify.app",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js and Node.js",
  image: "https://i.postimg.cc/nLpRzXK0/fiverr-dp.jpg",
  email: "devimran21@gmail.com",
  sameAs: [
    "https://github.com/imran21-dev",
    "https://linkedin.com/in/md-imran-sorker21",
    "https://twitter.com/MdImranPar3534",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dev Imran",
  url: "https://devimranx.netlify.app",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Banner />
      <Skills />
      <Projects />
      <HorizontalScroll />
      <Testimonials />
      <Contact />
    </>
  );
}
