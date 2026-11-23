/** @type {import('next').NextConfig} */
import path from 'path';

// Set SASS_PATH to include the styles directory
process.env.SASS_PATH = path.join(import.meta.dirname, 'styles');

const nextConfig = {
    reactStrictMode: true,

    // Opt-in standalone output for the Docker image (`Dockerfile` sets
    // BUILD_STANDALONE=true). Left off by default so Vercel keeps its own
    // build output and local `yarn build` stays unchanged.
    output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,

    // `sharp` backs the next/image optimizer. Next's file tracing copies only
    // part of it (and of its dependencies) into `.next/standalone`, so
    // `/_next/image` silently falls back to serving full-size originals.
    // Include the package, its platform binary and its dependency tree.
    outputFileTracingIncludes: {
        '/**': [
            './node_modules/sharp/**/*',
            './node_modules/@img/**/*',
            './node_modules/semver/**/*',
            './node_modules/detect-libc/**/*',
        ],
    },

    sassOptions: {
        additionalData: `@use "colors" as colors;`,
    },

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

export default nextConfig;
