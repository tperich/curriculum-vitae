module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "react-hooks/exhaustive-deps": 0,
  },
  plugins: ["react", "@typescript-eslint"],
};
