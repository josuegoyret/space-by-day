/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'apod.nasa.gov'
      },
      {
        hostname: 'img.youtube.com'
      },
      {
        hostname: 'www.nasa.gov'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/calendar/month',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
