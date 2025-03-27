const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    // Only apply MiniCssExtractPlugin in production and client-side builds
    if (!isServer && !dev) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[contenthash].css',
          chunkFilename: 'static/css/[contenthash].css',
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
