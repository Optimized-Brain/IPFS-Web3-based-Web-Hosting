import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Whenever someone does require("../../vendor/base-x.js"), 
      // point it at node_modules/base-x/index.js instead:
      "../../vendor/base-x.js": path.resolve(
        __dirname,
        "node_modules/base-x/index.js"
      ),
    };
    return config;
  },
  // ...any other Next.js options you have
};

export default nextConfig;
