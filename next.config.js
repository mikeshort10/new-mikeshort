module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeCongif: {},
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
