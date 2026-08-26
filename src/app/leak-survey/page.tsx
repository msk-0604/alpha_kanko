import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { getServiceBySlug } from "@/data/services";

const slug = "leak-survey";
const page = getServiceBySlug(slug);

export const metadata: Metadata = {
  title: "漏水調査｜滋賀・大津市｜株式会社アルファ管工",
  description: page?.description,
  alternates: { canonical: "/leak-survey" },
  openGraph: {
    title: "漏水調査｜滋賀・大津市｜株式会社アルファ管工",
    description: page?.description,
    url: "/leak-survey",
    images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
