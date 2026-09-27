import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are hot-linked from the Framer CDN. Serving them untouched avoids
    // any dependency on the optimizer being able to reach the remote host.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "fonts.gstatic.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
