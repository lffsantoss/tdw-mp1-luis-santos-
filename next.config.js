/** @type {import('next').NextConfig} */
module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended'
  ],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",
};
