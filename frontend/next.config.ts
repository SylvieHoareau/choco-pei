import type { NextConfig } from 'next';
// import type { Header } from 'next/dist/lib/load-custom-routes';

const isDev = process.env.NODE_ENV === 'development';

type SecurityHeader = {
  key: string;
  value: string;
};

const securityHeaders: SecurityHeader[] = [
  {
    key: "Content-Security-Policy",
    value: isDev
      ? "default-src 'self'; img-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
      : "default-src 'self'; img-src *; script-src 'self'; style-src 'self' 'unsafe-inline';"
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "no-referrer" }
];

const nextConfig: NextConfig = {
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
  },
};

export default nextConfig;
