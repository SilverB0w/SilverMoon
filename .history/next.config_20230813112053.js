/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["zh-Hans"],
    defaultLocale: "zh-Hans",
  },
  images: {
    deviceSizes: [960],
    unoptimized: true,
    domains: [, "img.mo3on.com",""],
  },
};

module.exports = nextConfig;
