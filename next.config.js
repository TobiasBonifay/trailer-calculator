/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: '/trailer-calculator',
    basePath: '/trailer-calculator',
    distDir: 'dist',
    trailingSlash: true,
}