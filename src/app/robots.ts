import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.alpha-kanko.com/sitemap.xml",
    host: "https://www.alpha-kanko.com",
  };
}
