/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false,
  },
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
