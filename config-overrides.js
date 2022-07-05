/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 10:09:52
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 16:30:40
 * @FilePath: /my-app/config-overrides.js
 * @Description: webpack配置
 */
const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
} = require("customize-cra");
const path = require("path");
module.exports = override(
  // 路径别名
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  }),
  // 引入全局的scss
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes("scss")) {
      // @ts-ignore
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: [
            "./src/styles/variables.scss",
            "./src/styles/by_main.scss",
          ],
        },
      });
    }
  })
);
