# @toolboxes/eslint-config

自用的`eslint`配置，使用`eslint`作为代码检验工具，`prettier`作为代码风格检验工具。

包含了常用的大多数规则：

- yaml
- markdown code block
- json
- typescript
- js
- jest
- vue
- react

## Usage

1.安装

```bash
# npm

npm i @toolboxes/eslint-config -D

# yarn

yarn add @toolboxes/eslint-config --dev

# pnpm

pnpm add @toolboxes/eslint-config -D
```

2.创建`.eslintrc.js`文件

```js
// .eslintrc.js
module.export = {
  extends: "toolboxes/eslint-config",
}
```

3.创建`.prettierrc.json`加入自己偏好的风格
