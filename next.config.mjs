/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
      return [
          {
              source: '/api/:path*',
              headers: [
                  { key: 'Access-Control-Allow-Credentials', value: 'true' },
                  { key: 'Access-Control-Allow-Origin', value: '*' },
                  { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                  { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
              ],
          },
      ]
  },
  webpack: (config, { isServer }) => {
      if (!isServer) {
          config.resolve.fallback = {
              ...config.resolve.fallback,
              fs: false,
              net: false,
              tls: false,
              child_process: false,
          };
      }
      return config;
  },
}

export default nextConfig;