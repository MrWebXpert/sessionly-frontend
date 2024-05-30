/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'http://localhost:5080'], // Add your backend domain here
    },
};

export default nextConfig;
