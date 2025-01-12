/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/dimakatso",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    assetPrefix: "/dimakatso"
};

module.exports = nextConfig;