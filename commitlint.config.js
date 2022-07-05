/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-05 14:40:35
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-05 14:40:39
 * @FilePath: /my-app/commitlint.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable import/no-commonjs */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build", // 构建
        "ci", // ci
        "chore", // Other changes that don't modify src or test files. 改变构建流程、或者增加依赖库、工具等
        "docs", // Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        "feat", // Adds a new feature. 新增feature
        "fix", // Solves a bug. 修复bug
        "perf", // Improves performance. 优化相关，比如提升性能、体验
        "refactor", // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
        "revert", // Reverts a previous commit. 回滚到上一个版本
        "style", // Improves formatting, white-space. 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
        "test", // Adds or modifies tests. 测试用例，包括单元测试、集成测试等
        "merge", // Merge 合并解决冲突
      ],
    ],
  },
};
