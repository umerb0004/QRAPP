/** @type {import('next').NextConfig} */

const { default: axios } = require('axios')

axios.get(process.env.NEXT_PUBLIC_CRONJOB_API,{
      headers: {
        'Content-Type': 'application/json',
    },
  })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
