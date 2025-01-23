/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    distDir: 'dist',
    basePath: '/trailer-calculator',
}

module.exports = nextConfig