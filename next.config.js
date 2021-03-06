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
    async rewrites() {
        return [
            {
                source: '/webcam-proxy/live',
                destination: 'http://77.158.167.18:8080/mjpg/video.mjpg',
            },
        ];
    },
};

module.exports = nextConfig;
