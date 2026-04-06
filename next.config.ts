import path from "node:path";
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "MobilityOne";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repoName}` : "",
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
