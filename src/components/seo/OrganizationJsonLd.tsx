export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alphakanko.jp/#organization",
    name: "株式会社アルファ管工",
    url: "https://alphakanko.jp",
    telephone: "077-579-3507",
    email: "honsha@alpha-kanko.co.jp",
    image: "https://alphakanko.jp/ogp.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "坂本6丁目8-8",
      addressLocality: "大津市",
      addressRegion: "滋賀県",
      postalCode: "520-0113",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.0697,
      longitude: 135.8706,
    },
    areaServed: [
      "滋賀県",
      "大津市",
      "草津市",
      "守山市",
      "栗東市",
      "京都府南部",
      "大阪府北部",
    ],
    description:
      "滋賀県大津市の給排水衛生設備工事・配管工事・水道施設工事・漏水調査・修繕メンテナンス。大津市指定給水装置工事事業者・指定排水設備工事事業者。",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
