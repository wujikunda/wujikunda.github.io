
## GIT v2

### 什么是GIT

- 是一个源代码管理工具
- 在一个项目中，凡是由开发人员编写的都算是源代码
- 源代码有必要管理起来？
- 让源代码可以被追溯，主要记录每次变更了什么，谁主导这次变化
- 人为的维护比较麻烦，
- GIT是Linux之父当年为了维护管理Linux的源代码写的一个工具
- Git 之前 很多使用 svn vss tfs hs ......


- https://guides.github.com/

### 安装GIT

- git命令行工具
- 基于git命令行的一个客户端软件（提供一个界面去管理源代码）

### GIT命令操作

- 初始化一个本地GIT仓储

```shell
cd 当前项目目录
git init // 初始化一个本地的仓库
```

> 就是在本地文件夹中添加了一个.git的文件夹用于记录所有的项目变更信息

- 查看本地仓储的变更状态

git status
用于查看本地仓储的状态
第一次查看，显示的是一坨没有被跟踪的文件

git status -s // -s 是输出简要的变更日志

- 添加本地暂存（托管）文件

git add
可以将一个没有被跟踪的文件添加到跟踪列表

类似于node_modules这种性质的文件是不应该被跟踪

- 添加本地GIT忽略清单文件

在代码库文件夹的根目录添加一个.gitignore文件
此文件用于说明忽略的文件有哪些

- 提交被托管的文件变化到本地仓储

git commit
将本地的变化提交的本地的仓库文件夹归档
一般在有了一个小单元的整体变化后再提交

- 对比差异

git diff
可以用于对比当前状态和版本库中状态的变化

- 提交日志

git log 
可以查看提交日志

- 回归到指定版本

git reset --hard

- 为仓储添加远端（服务器端）地址

- 将本地仓储的提交记录推送到远端的master分支

- 拉取远端master分支的更新记录到本地

- 回归到指定版本

### GITHUB基本使用

- https://github.com/
- GITHUB是一个GIT服务的提供商，
- 
- 提出社交化编程

http://zoomzhao.github.io/code-guide/
https://github.com/jobbole/awesome-javascript-cn
https://github.com/jobbole/awesome-css-cn


- GIT分支









## Angular入门

### 简介

- 知识储备
- 什么是Angular
  + 快速构建Web应用程序
  + 单页面应用程序
- Angular的特性
- 为什么要用Angular
  + 让Web应用程序开发更简单，更快捷
- 带领前端进入MV*的时代

### 开始使用
  
- 引用Angular
  + 下载
  + bower
  + npm
- 基本使用