import type { NextConfig } from "next";

const repo = 'deepreech-lp'; // your repo name

module.exports = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  // ...other config
};

const nextConfig: NextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
