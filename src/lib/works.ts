import { createClient, type MicroCMSImage } from "microcms-js-sdk";
import type { WorkCategory, WorkImage, WorkItem, WorkLayout } from "@/data/works";
import {
  getAllWorkSlugs as getLocalSlugs,
  getRelatedWorks as getLocalRelated,
  getWorkBySlug as getLocalBySlug,
  workCategories,
  works as localWorks,
} from "@/data/works";

type MicroCmsWork = {
  id: string;
  title: string;
  slug: string;
  category: WorkCategory;
  description: string;
  layout: WorkLayout;
  coverImage?: MicroCMSImage;
  gallery?: MicroCMSImage[];
  beforeImage?: MicroCMSImage;
  afterImage?: MicroCMSImage;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

export const isMicroCmsEnabled = Boolean(serviceDomain && apiKey);

function getClient() {
  if (!serviceDomain || !apiKey) return null;
  return createClient({ serviceDomain, apiKey });
}

function toWorkImage(image: MicroCMSImage | undefined, fallbackAlt: string): WorkImage | undefined {
  if (!image?.url) return undefined;
  return {
    src: image.url,
    alt: fallbackAlt,
  };
}

function mapWork(entry: MicroCmsWork): WorkItem {
  const cover =
    toWorkImage(entry.coverImage, entry.title) ??
    ({ src: "/images/works/new-house-plumbing-01.webp", alt: entry.title } satisfies WorkImage);

  const gallery = (entry.gallery ?? [])
    .map((image, index) => toWorkImage(image, `${entry.title}の写真${index + 1}`))
    .filter((image): image is WorkImage => Boolean(image));

  return {
    slug: entry.slug || entry.id,
    title: entry.title,
    category: entry.category,
    description: entry.description,
    coverImage: cover,
    layout: entry.layout || "standard",
    images: gallery.length > 0 ? gallery : undefined,
    beforeImage: toWorkImage(entry.beforeImage, `${entry.title}（施工前）`),
    afterImage: toWorkImage(entry.afterImage, `${entry.title}（施工後）`),
  };
}

async function fetchAllFromMicroCms(): Promise<WorkItem[] | null> {
  const client = getClient();
  if (!client) return null;

  try {
    const response = await client.getList<MicroCmsWork>({
      endpoint: "works",
      queries: { limit: 100, orders: "-publishedAt" },
    });
    return response.contents.map(mapWork);
  } catch (error) {
    console.error("[microCMS] works fetch failed, falling back to local data", error);
    return null;
  }
}

export async function getWorks(): Promise<WorkItem[]> {
  const remote = await fetchAllFromMicroCms();
  return remote && remote.length > 0 ? remote : localWorks;
}

export async function getWorkBySlug(slug: string): Promise<WorkItem | undefined> {
  const client = getClient();
  if (client) {
    try {
      const response = await client.getList<MicroCmsWork>({
        endpoint: "works",
        queries: { filters: `slug[equals]${slug}`, limit: 1 },
      });
      if (response.contents[0]) return mapWork(response.contents[0]);
    } catch (error) {
      console.error("[microCMS] work detail fetch failed", error);
    }
  }
  return getLocalBySlug(slug);
}

export async function getAllWorkSlugs(): Promise<string[]> {
  const items = await getWorks();
  if (items.length > 0) return items.map((item) => item.slug);
  return getLocalSlugs();
}

export async function getRelatedWorks(slug: string, limit = 3): Promise<WorkItem[]> {
  const items = await getWorks();
  const current = items.find((item) => item.slug === slug);
  if (!current) return items.slice(0, limit);
  const same = items.filter((item) => item.slug !== slug && item.category === current.category);
  const others = items.filter((item) => item.slug !== slug && item.category !== current.category);
  return [...same, ...others].slice(0, limit);
}

export { workCategories, localWorks, getLocalRelated };
