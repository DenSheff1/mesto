const plugins = ["@babel/plugin-proposal-class-properties"];

const presets = [
  ['@babel/env', {
    targets: {
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },

    useBuiltIns: "entry",
    corejs: { "version": 3 },
  }]
];

module.exports = { presets, plugins };
