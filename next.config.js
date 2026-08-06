/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
          path: false,
          crypto: false,
        },
      };
    }
    
    // This is the key fix for Three.js
    config.module = {
      ...config.module,
      exprContextCritical: false,
    };
    
    return config;
  },
  transpilePackages: ['three'],
};

module.exports = nextConfig;