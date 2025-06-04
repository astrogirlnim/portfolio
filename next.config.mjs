/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only apply basePath in production (for GitHub Pages deployment)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
  }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig