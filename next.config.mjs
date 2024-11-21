/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // distDir:"build"
    trailingSlash: true,
    images: {
        loader: "custom",
        loaderFile: './ImageLoader.js'
    },
};

export default nextConfig;
