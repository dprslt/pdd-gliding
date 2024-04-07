/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.orcines.fr',
                port: '443',
                pathname: '/wp-content/uploads/webcam/webcam.jpg',
            },
            {
                protocol: 'https',
                hostname: 'wwwobs.univ-bpclermont.fr',
                port: '443',
            },
            {
                protocol: 'https',
                hostname: 'www.panoramiquedesdomes.fr',
                port: '443',
            },
            {
                protocol: 'https',
                hostname: 'meteovergne.fr',
                port: '443',
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    async rewrites() {
        return [
            {
                source: '/webcam-proxy/live',
                destination: 'http://77.158.167.18:8080/mjpg/video.mjpg',
            },
            {
                source: '/opgc-proxy',
                destination:
                    'https://wwwobs.univ-bpclermont.fr/observ/chimie/PDD.jpeg',
            },
        ];
    },
};

module.exports = nextConfig;
