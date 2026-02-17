/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com','images.unsplash.com'],
  },
  
  reactStrictMode: true, 
};

export default nextConfig;