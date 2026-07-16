/**
 * Content access layer.
 * Currently serves local TypeScript data. When MICROCMS_* env vars are set,
 * this module can be extended to fetch from microCMS without changing page components.
 */
export {
  works,
  getWorkBySlug,
  getAllWorkSlugs,
  getRelatedWorks,
  workCategories,
} from "@/data/works";
export type { WorkItem, WorkCategory } from "@/data/works";
export { newsItems, getNewsById, getAllNewsIds } from "@/data/news";
export type { NewsItem } from "@/data/news";
export { faqItems } from "@/data/faq";
export type { FaqItem } from "@/data/faq";
