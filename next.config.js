/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        domains: [
            'www.orcines.fr',
            'wwwobs.univ-bpclermont.fr',
            'meteovergne.fr',
            'www.panoramiquedesdomes.fr',
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
