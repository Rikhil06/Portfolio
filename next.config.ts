import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Enable source maps for production builds
    if (!isServer) {
      config.devtool = 'source-map'; // You can use other types like 'cheap-module-source-map', 'eval-source-map', etc.
    }
    return config;
  },
};

export default nextConfig;
