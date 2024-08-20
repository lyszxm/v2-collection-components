module.exports = {
  header: '# 更新日志 \n\n',
  /*
  "type" commit 类型
  "section" 不同的 commit 类型所 在 CHANGELOG.md 中的区域
  "hidden" 是否在 CHANGELOG.md 中显示 */
  types: [
    {
      type: 'feat',
      section: '✨ Features | 新功能'
    },
    {
      type: 'fix',
      section: '🐛 Bug Fixes | Bug 修复'
    },
    {
      type: 'perf',
      section: '⚡ Performance Improvements | 性能优化'
    },
    {
      type: 'revert',
      section: '⏪ Reverts | 回退'
    },
    {
      type: 'chore',
      section: '📦 Chores | 其他更新'
    },
    {
      type: 'docs',
      section: '📝 Documentation | 文档'
    },
    {
      type: 'style',
      section: '💄 Styles | 风格',
      hidden: true
    },
    {
      type: 'refactor',
      section: '♻ Code Refactoring | 代码重构'
    },
    {
      type: 'test',
      section: '✅ Tests | 测试'
    },
    {
      type: 'build',
      section: '👷‍ Build System | 构建'
    },
    {
      type: 'ci',
      section: '🔧 Continuous Integration | CI 配置'
    }
  ],
  /*
  bump: true：表示在执行相关操作时要跳过自动版本升级（bump）的步骤，同时会缓存变化并将 Git 状态重置至最近的 tag 节点。
  changelog: true：表示在执行相关操作时要跳过自动生成 changelog 文档的步骤。
  commit: true：表示在执行相关操作时要跳过提交变动的步骤。
  tag: true：表示在执行相关操作时要跳过增加 tag 标识的步骤。

  这些设置的目的是为了根据具体需求灵活地控制每个操作是否执行，从而定制化项目的发布流程。通过设置不同的值（true 或 false），可以决定是否跳过相应的操作。
   ! 一般都不跳过
  */
  skip: {
    bump: false,
    changelog: false,
    commit: false,
    tag: false
  }
  //hash链接 ：在提交消息中检测到的提交 SHA 的 URL 格式。
  // commitUrlFormat: "https://liuyisong.gitee.com/liuyisong/rollup_0/commit/{{hash}}",
}
