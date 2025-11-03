/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ 构建时忽略 ESLint 报错
  eslint: { ignoreDuringBuilds: true },

  // ✅ 构建时忽略 TypeScript 报错
  typescript: { ignoreBuildErrors: true },

  // ✅ 需要转译的 monorepo 包
  transpilePackages: [
    '@saasfly/stripe',
    '@saasfly/api',
    '@saasfly/ui',
    '@saasfly/common',
  ],

  // ✅ 一次性允许所有 HTTPS 图片域名
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 🚀 通配所有 https 图片来源
      },
    ],
  },

  // ✅ 避免 cookies 动态渲染报错
  experimental: {
    serverActions: true,
    missingSuspenseWithCSRError: false,
  },

  // ✅ 生成独立构建结果
  output: 'standalone',
};

module.exports = nextConfig;
