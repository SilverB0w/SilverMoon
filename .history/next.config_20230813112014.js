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
    domains: ["", "silver-moon.cc", "github.com/SilverB0w/SM-image","SilverB0w/SM-image@main"],
  },
};

module.exports = nextConfig;
