// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add any external domains here
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
