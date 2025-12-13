import type { NextConfig } from 'next'

const deployTarget = process.env.DEPLOY_TARGET;
const basePath = deployTarget === 'gh-pages' ? '/home' : '';

const nextConfig: NextConfig = {
  basePath: basePath,
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
