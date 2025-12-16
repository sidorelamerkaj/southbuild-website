/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Static export for Cloudflare Pages
  trailingSlash: true, // Recommended for static export
}

module.exports = nextConfig

