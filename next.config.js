/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.lucyinthesky.com",
        pathname: "/data/**",
      },
    ],
  },
}

module.exports = nextConfig
