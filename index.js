module.exports = {
  extends: ["airbnb"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  plugins: ["react", "import"],
  parser: "babel-eslint",
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "arrow-body-style": ["error", "as-needed"],
    "react/forbid-prop-types": ["error", { forbid: [] }],
    "comma-dangle": [0],
    "no-console": "off",
    "import/no-named-as-default": "off",
    "import/first": "off",
    "arrow-parens": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/prefer-stateless-function": "off"
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
