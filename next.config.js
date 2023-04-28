/** @type {import('next').NextConfig} */

const env = require('dotenv').config().parsed;

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APPSECRET: process.env.APPSECRET,
  },
  env: {
    APPSECRET: env.APPSECRET
  }

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/products',
  //       permanent: true
  //     }
  //   ]
  // }
}

module.exports = nextConfig
