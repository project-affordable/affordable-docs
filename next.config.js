module.exports = {
  target: 'serverless',

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  experimental: { modern: true, documentMiddleware: true },

  webpack: (config, { isServer }) => {
    config.mode = 'production';

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }

    config.module.rules.push({ test: /\.tsx?$/, loader: 'ts-loader' });

    return config;
  }
};
