/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'seosherpa.com'
            },
        ]
    }
};

export default nextConfig;
