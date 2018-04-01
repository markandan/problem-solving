const OFF = 0, WARN = 1, ERROR = 2;
module.exports = {
  "extends": ["airbnb-base"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false,
    "ecmaFeatures": {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true
     }
  },
  "env": {
    "es6": true,
    "browser": true
  },
};