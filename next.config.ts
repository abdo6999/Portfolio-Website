import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default withBundleAnalyzer(nextConfig);
