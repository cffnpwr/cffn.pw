/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  distDir: "dist",
};

module.exports = nextConfig;
