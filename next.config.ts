import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/area", destination: "/", permanent: true },
      { source: "/area/:path*", destination: "/", permanent: true },
      { source: "/news", destination: "/", permanent: true },
      { source: "/news/:path*", destination: "/", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
