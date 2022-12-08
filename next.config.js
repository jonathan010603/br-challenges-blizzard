/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**api.brchallenges.com",
        pathname: "/games/**",
      },
    ],
  },
};

module.exports = nextConfig;
