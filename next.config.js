/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'export',
  // assetPrefix: ".",
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
