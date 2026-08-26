import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { getServiceBySlug } from "@/data/services";

const page = getServiceBySlug("reform");

export const metadata: Metadata = {
  title: "水廻りリフォーム｜滋賀・大津市｜株式会社アルファ管工",
  description: page?.description,
  alternates: { canonical: "/reform" },
  openGraph: {
    title: "水廻りリフォーム｜滋賀・大津市｜株式会社アルファ管工",
    description: page?.description,
    url: "/reform",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
