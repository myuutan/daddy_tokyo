import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/daddy_tokyo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
