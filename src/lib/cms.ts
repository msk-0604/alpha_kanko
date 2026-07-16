/**
 * Content access layer.
 * Works are loaded from microCMS when MICROCMS_* env vars are set,
 * otherwise local TypeScript data is used.
 */
export {
  getWorks,
  getWorkBySlug,
  getAllWorkSlugs,
  getRelatedWorks,
  workCategories,
  isMicroCmsEnabled,
} from "./works";
export type { WorkItem, WorkCategory } from "@/data/works";
export { newsItems, getNewsById, getAllNewsIds } from "@/data/news";
export type { NewsItem } from "@/data/news";
export { faqItems } from "@/data/faq";
export type { FaqItem } from "@/data/faq";
