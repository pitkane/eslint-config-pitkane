module.exports = {
  extends: ["airbnb"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  plugins: ["class-property", "import"],
  parser: "babel-eslint",
  rules: {
    // "react/jsx-indent": 0,
    // "react/jsx-filename-extension": 0,
    // "react/prop-types": 0,
    // "react/no-did-mount-set-state": 0,
    // "react/prefer-stateless-function": 0,
    // "no-trailing-spaces": 0,
    // "import/prefer-default-export": 0,
    // "import/no-extraneous-dependencies": 0,
    // "new-cap": 0,
    // "func-names": 0,
    // "consistent-return": 0,
    // "no-use-before-define": 0,
    // "global-require": 0,
    // "linebreak-style": 0
  },
  globals: {
    describe: false,
    it: false,
    test: false,
    expect: false,
    beforeEach: false,
    afterEach: false,
    before: false
  }
};