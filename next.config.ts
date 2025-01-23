import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com",  "images.unsplash.com", "res.cloudinary.com", "media.istockphoto.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during builds
  },
  // other config options here
};

export default nextConfig;
