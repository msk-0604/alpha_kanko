import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { getServiceBySlug } from "@/data/services";

const page = getServiceBySlug("drainage");

export const metadata: Metadata = {
  title: "排水工事｜滋賀｜株式会社アルファ管工",
  description: page?.description,
  alternates: { canonical: "/drainage" },
  openGraph: {
    title: "排水工事｜滋賀｜株式会社アルファ管工",
    description: page?.description,
    url: "/drainage",
  },
};

export default function Page() {
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
