/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s3-eu-west-1.amazonaws.com', 'wuolah-public.s3.eu-west-1.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/universidades',
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
};

module.exports = nextConfig;
