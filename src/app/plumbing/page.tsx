import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { getServiceBySlug } from "@/data/services";

const page = getServiceBySlug("plumbing");

export const metadata: Metadata = {
  title: "滋賀県の管工事・配管工事・給排水設備工事｜株式会社アルファ管工",
  description: page?.description,
  alternates: { canonical: "/plumbing" },
  openGraph: {
    title: "滋賀県の管工事・配管工事・給排水設備工事｜株式会社アルファ管工",
    description: page?.description,
    url: "/plumbing",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
