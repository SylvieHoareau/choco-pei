/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: isDev
      ? "default-src 'self'; img-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
      : "default-src 'self'; img-src *; script-src 'self'; style-src 'self' 'unsafe-inline';"
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Frame-Options", value: "DENY" }, // corrigé ici (avant c'était "X-Frame-Optiohns")
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "no-referrer" }
];

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ajout éventuel de custom Webpack
    return config;
  },  
  images: {
    domains: ['images.unsplash.com']
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  }
};

module.exports = nextConfig;
