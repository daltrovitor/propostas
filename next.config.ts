// Hello World
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prx.app.br",
      },
      {
        protocol: "https",
        hostname: "viralweb.online",
      },
      {
        protocol: "https",
        hostname: "viraweb.online",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
