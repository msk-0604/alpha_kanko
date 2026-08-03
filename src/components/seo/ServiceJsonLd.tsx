type ServiceJsonLdProps = {
  name: string;
  description: string;
  url: string;
};

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://alphakanko.jp${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: "株式会社アルファ管工",
      telephone: "077-579-3507",
      address: {
        "@type": "PostalAddress",
        streetAddress: "坂本6丁目8-8",
        addressLocality: "大津市",
        addressRegion: "滋賀県",
        addressCountry: "JP",
      },
    },
    areaServed: ["滋賀県", "大津市", "草津市"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
