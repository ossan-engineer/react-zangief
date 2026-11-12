module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      // pnpm では react-scripts の自動検出に失敗するため明示する（経緯は PR 説明を参照）
      "name": "@storybook/preset-create-react-app",
      "options": {
        "scriptsPackageName": "react-scripts"
      }
    }
  ]
}
