/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["help.twitter.com", "www.facebook.com"],
  },
};

module.exports = nextConfig;
