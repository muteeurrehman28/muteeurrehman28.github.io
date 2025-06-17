/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://muteeurrehman28.github.io',
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL || '',
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV || 'production',
  },
  // Disable image optimization during export
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Disable server-side features since we're using static export
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig 