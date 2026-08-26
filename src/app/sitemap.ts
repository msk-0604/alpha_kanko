import type { MetadataRoute } from "next";
import { getAllWorkSlugs } from "@/lib/works";
import { getAllVoiceIds } from "@/data/voices";
import { servicePages } from "@/data/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://alphakanko.jp";
  const now = new Date();
  const workSlugs = await getAllWorkSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/leak-survey",
    "/leak-repair",
    "/drainage",
    "/plumbing",
    "/reform",
    "/works",
    "/business",
    "/company",
    "/greeting",
    "/voices",
    "/strength",
    "/recruit",
    "/faq",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/works" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/leak-survey" ||
            path === "/leak-repair" ||
            path === "/works" ||
            path === "/contact"
          ? 0.9
          : path === "/plumbing" || path === "/drainage" || path === "/reform" || path === "/business"
            ? 0.88
            : path === "/faq"
              ? 0.75
              : 0.6,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${base}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.88,
  }));

  const voiceRoutes: MetadataRoute.Sitemap = getAllVoiceIds().map((id) => ({
    url: `${base}/voices/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const workRoutes: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: `${base}/works/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const merged = [...staticRoutes, ...serviceRoutes, ...voiceRoutes, ...workRoutes];
  const seen = new Set<string>();
  return merged.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
