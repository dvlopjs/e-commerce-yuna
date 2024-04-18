/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placekitten.com"],
  },
  env: {
    NEXTAUTH_SECRET: "R+uogdJ++rHgDEwU0oZGk+Ss4iTTsg2V1PcH7BVe2RU=",
  },
};

export default nextConfig;
