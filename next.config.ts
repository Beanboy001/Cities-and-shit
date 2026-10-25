import type { NextConfig } from 'next';

const assetPrefix = process.env.NODE_ENV === 'production' ? '/Cities-and-shit' : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix,
  env: { NEXT_PUBLIC_BASE_PATH: assetPrefix },
  images: { unoptimized: true },
};

export default nextConfig;
