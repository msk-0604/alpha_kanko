import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { getServiceBySlug } from "@/data/services";

const page = getServiceBySlug("plumbing");

export const metadata: Metadata = {
  title: "給排水設備工事・配管工事｜滋賀｜株式会社アルファ管工",
  description: page?.description,
  alternates: { canonical: "/plumbing" },
  openGraph: {
    title: "給排水設備工事・配管工事｜滋賀｜株式会社アルファ管工",
    description: page?.description,
    url: "/plumbing",
  },
};

export default function Page() {
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
