/** @type {import('next').NextConfig} */
const hostnames = [
    'ifuw.ru',
    'mc.yandex.ru',
]
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    output: 'standalone',
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: hostnames.map(hostname => ({
            protocol: 'https',
            hostname
        })),
        minimumCacheTTL: 1500000,
    },

}

module.exports = nextConfig
