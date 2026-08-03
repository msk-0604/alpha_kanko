import type { MetadataRoute } from "next";
import { getAllNewsIds } from "@/data/news";
import { getAllWorkSlugs } from "@/lib/works";
import { getAllAreaSlugs } from "@/data/areas";
import { getAllBlogSlugs } from "@/data/blog";
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
    "/area",
    "/blog",
    "/voices",
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
      path === "" || path === "/works" || path === "/blog" || path === "/news"
        ? "weekly"
        : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/leak-survey" ||
            path === "/leak-repair" ||
            path === "/works" ||
            path === "/contact"
          ? 0.9
          : path === "/plumbing" || path === "/drainage" || path === "/reform"
            ? 0.85
            : path === "/blog" || path === "/faq" || path === "/area"
              ? 0.75
              : 0.6,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${base}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.88,
  }));

  const areaRoutes: MetadataRoute.Sitemap = getAllAreaSlugs().map((slug) => ({
    url: `${base}/area/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
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

  const newsRoutes: MetadataRoute.Sitemap = getAllNewsIds().map((id) => ({
    url: `${base}/news/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const merged = [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...blogRoutes,
    ...voiceRoutes,
    ...workRoutes,
    ...newsRoutes,
  ];
  const seen = new Set<string>();
  return merged.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
