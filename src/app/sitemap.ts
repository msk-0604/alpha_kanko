import type { MetadataRoute } from "next";
import { getAllWorkSlugs } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.alpha-kanko.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/works",
    "/business",
    "/company",
    "/area",
    "/strength",
    "/recruit",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/works" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/works" ? 0.9 : 0.6,
  }));

  const workRoutes: MetadataRoute.Sitemap = getAllWorkSlugs().map((slug) => ({
    url: `${base}/works/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...workRoutes];
}
