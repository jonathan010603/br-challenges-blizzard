/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**api.brchallenges.com",
        port: "",
        pathname: "/games/**",
      },
    ],
  },
};

module.exports = nextConfig;
