/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Configure for better performance
  swcMinify: true,
  // Allow transpilation of specific packages if needed
  transpilePackages: [],
  // Webpack configuration (if needed)
  webpack: (config, { isServer }) => {
    // Add any custom webpack configuration here if needed
    return config;
  },
};

module.exports = nextConfig;