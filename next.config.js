/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/trailer-calculator',
    trailingSlash: true,
}

module.exports = nextConfig