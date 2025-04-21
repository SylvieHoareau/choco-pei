import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; img-src *; script-src 'self'; style-src 'self' 'unsafe-inline';"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  }
]

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'images.unsplash.com',
      'img.freepik.com'
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
         ...securityHeaders,
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" }
        ],
      },
    ];
  }
};

export default nextConfig;
