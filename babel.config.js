module.exports = function babelConfig(api) {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', { modules: false }], // Output ESM instead of CommonJS
      '@babel/preset-react',
    ],
    plugins: [],
  };
};
