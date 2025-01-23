/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/trailer-calculator',
    assetPrefix: '/trailer-calculator/',
    trailingSlash: true,
    // This is important to ensure files are served from the correct path
    experimental: {
        optimizeCss: true,
    },
    webpack: (config, {isServer}) => {
        // Handle any specific webpack configuration if needed
        return config;
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
}