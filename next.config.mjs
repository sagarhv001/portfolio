// GitHub Pages serves the site under /<repo>; the deploy workflow passes that prefix in. Empty locally.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: 'export',
    basePath,
    // Next prefixes its own assets; this lets our code prefix plain public/ paths (<img>, CSS url()) too
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
    images: {
      loader: 'custom',
      loaderFile: './loader.js',
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  };
  
  export default nextConfig;