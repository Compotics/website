import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
