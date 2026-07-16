export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "株式会社アルファ管工",
    url: "https://www.alpha-kanko.com",
    telephone: "077-579-3507",
    email: "honsha@alpha-kanko.co.jp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "坂本6丁目8-8",
      addressLocality: "大津市",
      addressRegion: "滋賀県",
      addressCountry: "JP",
    },
    areaServed: ["滋賀県", "京都府南部", "大阪府北部"],
    description:
      "滋賀県大津市の給排水衛生設備工事・配管工事・水道施設工事・修繕メンテナンス。大津市指定給水装置工事事業者・指定排水設備工事事業者。",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
