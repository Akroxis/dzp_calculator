module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        corejs: 3,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
  ],
};
