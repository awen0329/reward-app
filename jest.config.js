module.exports = {
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  collectCoverage: true,
  collectCoverageFrom: ["src/*/*.js"],
  coverageReporters: ["lcov", "text-summary"],
  testPathIgnorePatterns: ["/src/App.js", "/src/index.js"],
};
