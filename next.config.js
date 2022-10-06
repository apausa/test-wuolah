/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/universidades',
  images: {
    domains: ['wuolah-public.s3.eu-west-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
