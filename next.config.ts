import type { NextConfig } from "next";

// Set GITHUB_PAGES=true and REPO_NAME=<repo> when building for GitHub Pages,
// since a project page is served from username.github.io/<repo>/.
// Vercel builds (and local dev) leave these unset and deploy from the root.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.REPO_NAME ?? "";
const basePath = isGithubPages && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  // Inlined into the client bundle so plain <a href> links to static files
  // (e.g. /resume.pdf) can be prefixed manually — unlike next/image and
  // next/link, a raw anchor tag's href is not basePath-aware automatically.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
