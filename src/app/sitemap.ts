import type { MetadataRoute } from "next";
import { getAllNewsIds } from "@/data/news";
import { getAllWorkSlugs } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.alpha-kanko.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/works",
    "/business",
    "/company",
    "/greeting",
    "/area",
    "/strength",
    "/recruit",
    "/news",
    "/faq",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/works" || path === "/news" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/works" || path === "/contact"
          ? 0.9
          : path === "/news" || path === "/faq"
            ? 0.7
            : 0.6,
  }));

  const workRoutes: MetadataRoute.Sitemap = getAllWorkSlugs().map((slug) => ({
    url: `${base}/works/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = getAllNewsIds().map((id) => ({
    url: `${base}/news/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...workRoutes, ...newsRoutes];
}
