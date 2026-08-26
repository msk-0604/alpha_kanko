import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { getServiceBySlug } from "@/data/services";

const page = getServiceBySlug("drainage");

export const metadata: Metadata = {
  title: "排水工事｜滋賀・大津市｜株式会社アルファ管工",
  description: page?.description,
  alternates: { canonical: "/drainage" },
  openGraph: {
    title: "排水工事｜滋賀・大津市｜株式会社アルファ管工",
    description: page?.description,
    url: "/drainage",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
