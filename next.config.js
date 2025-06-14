/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.128.60'],
  images: {
    domains: ['192.168.128.60'],
  },
}

module.exports = nextConfig 