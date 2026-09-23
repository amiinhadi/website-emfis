/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/features', destination: '/' },
      { source: '/applications', destination: '/' },
      { source: '/workflow', destination: '/' },
      { source: '/documentation', destination: '/' },
      { source: '/contact', destination: '/' },
    ]
  },
}
module.exports = nextConfig
