
## package.json
```
// package.json
  "config": {
    "commitizen": {
      "path": "./node_modules/git-cz"
    }
  }, // 现在用的是这个

  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
```

## npm-run-all

以下是使用 `npm-run-all` 的一些常见用法：

1. **顺序执行命令**:

   - `run-s`（run-s 为 run sequential 的缩写）可以用于顺序执行多个命令。例如：

     ```json
     {
       "scripts": {
         "build": "run-s clean build:lib"
       }
     }
     ```

2. **并行执行命令**:

   - `run-p`（run-p 为 run parallel 的缩写）来并行执行多个命令。例如：

       ```json
       {
         "scripts": {
           "dev": "run-p watch css",
           "watch": "webpack --watch",
           "css": "sass --watch src:dist"
         }
       }
       ```

   ### 示例

       ```json
       {
         "scripts": {
           "dev": "run-p watch css",
           "watch": "webpack --watch",
           "css": "sass --watch src:dist"
         }
       }
       ```