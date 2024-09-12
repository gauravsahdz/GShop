module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          "@assets": "./assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@navigators": "./src/navigators",
          "@utils": "./src/utils",
          "@styles": "./src/styles",
          "@hooks": "./src/hooks",
          "@constants": "./src/constants",
          "@context": "./src/context"
        },
      },
    ],
  ]
};
