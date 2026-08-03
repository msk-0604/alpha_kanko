import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { getServiceBySlug } from "@/data/services";

const page = getServiceBySlug("leak-repair");

export const metadata: Metadata = {
  title: "漏水修理・水漏れ修理｜滋賀｜株式会社アルファ管工",
  description: page?.description,
  alternates: { canonical: "/leak-repair" },
  openGraph: {
    title: "漏水修理・水漏れ修理｜滋賀｜株式会社アルファ管工",
    description: page?.description,
    url: "/leak-repair",
  },
};

export default function Page() {
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
