const assert = require("assert");
const eslint = require("eslint");
const conf = require("../");

// The source files to lint.
const repoFiles = ["index.js", "test/test.js"];

// Use the rules defined in this repo to test against.
const eslintOpts = {
  envs: ["node", "es6"],
  useEslintrc: false,
  plugins: ["react", "import"],
  rules: conf.rules
};

// Runs the linter on the repo files and asserts no errors were found.
const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);
// console.log(report.results[0].messages);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
repoFiles.forEach((file, index) => {
  try {
    assert(report.results[index].filePath.endsWith(file));
  } catch (e) {
    console.log(e);
    // throw e;
  }
});
