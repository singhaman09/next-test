import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'flagcdn.com',
         port: '',
         pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'upload.wikimedia.org',
         port: '',
         pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'i.pravatar.cc',
         port: '',
         pathname: '/**',
       },
     ],
  },
};

export default nextConfig;
