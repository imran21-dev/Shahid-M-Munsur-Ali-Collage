import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // ✅ Applies to all search engine bots
        allow: "/", // ✅ Allow full site indexing
        disallow: [], // ✅ Nothing blocked (no private pages)
      },
    ],
    sitemap: "https://devimran.netlify.app/sitemap.xml", // ✅ Points Google to your sitemap
    host: "https://devimran.netlify.app",
  };
}
