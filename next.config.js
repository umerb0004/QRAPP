/** @type {import('next').NextConfig} */

const { default: axios } = require('axios')

axios.get(process.env.NEXT_PUBLIC_CRONJOB_API, {
  headers: {
    'Content-Type': 'application/json',
  },
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hrms-prod.s3.us-east-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hrms-prods3.us-east-2.amazonaws.com/**',
      },
    ],
  },
}

module.exports = nextConfig
