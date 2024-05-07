# Vue 3 + TypeScript + Vite + [Vant mobile](https://vant-contrib.gitee.io/) 组件

# 编辑器需配置“保存自动格式化”

## 编辑器插件

- Eslint
- Prettier

## 编辑器配置

- VsCode
  - 打开`settings.json`文件
  - 粘贴`"editor.formatOnSave": true`
- WebStorm
  - 打开设置 -> 搜索`eslint`与`prettier`
  - 勾选 `自动ESLint配置`与`自动Prettier配置`
  - 勾选`保存时运行eslint --fix(U)`

## 编辑器默认格式化程序

- VsCode:
  - 打开`settings.json`文件
  - 粘贴`"editor.defaultFormatter": "esbenp.prettier-vscode"`

# 提交流程

> 提交时会检测暂存区中的代码是否符合 eslint 等规范，不符合则无法提交

## 方式 1(推荐-Angular 风格)

1. `git add .`
2. `pnpm commit`
3. 根据提示输入提交的信息
4. `git push ...`

## 方式 2

1. `git add .`
2. `pnpm commit -m '[type]: xxxxx''`
3. `git push ...`

# 关于 `.xxxignore`

- 后续根据开发自行在对应的规则`ignore`文件中添加所忽略的文件
