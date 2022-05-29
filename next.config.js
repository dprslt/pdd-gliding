/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: [
      'www.orcines.fr',
      'wwwobs.univ-bpclermont.fr',
      'meteovergne.fr'
    ]
  }
}

module.exports = nextConfig
