// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 根据 node 的版本号来结合插件对代码进行转换
        targets: { node: 'current' }
      }
    ],
    '@babel/preset-typescript' // 如果使用 TypeScript
  ]
}
