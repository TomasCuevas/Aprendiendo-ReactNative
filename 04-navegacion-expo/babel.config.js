module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-proposal-optional-chaining",
    ],
    presets: ["babel-preset-expo"],
  };
};
