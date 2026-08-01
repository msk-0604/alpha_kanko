import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alphakanko.jp/sitemap.xml",
    host: "https://alphakanko.jp",
  };
}
