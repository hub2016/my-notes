# windows安装
mysysgit: https://git-for-windows.github.io/
# mac安装
git: http://git-scm.com/
# 代码比较工具
beyondCompare: http://www.scootersoftware.com/download.php

## 全局配置
$ git config --global user.name "hub2016"

$ git config --global user.email "meopic@126.com"

## 生成密钥
$ ssh-keygen -t rsa -C "meopic@126.com"

按3个回车，密码为空，密钥保存位置：C:\Users\Hub2016\\.ssh\id_rsa.pub

## 测试成功
$ ssh -T git@github.com

Hi hub2016! You've successfully authenticated, but GitHub does not provide shell access

### 初始化
$ git init

### 添加单个文件
$ git add README.md

### 添加所有文件（新增和修改的）
$ git add .

### 添加所有文件（修改和删除的）
$ git add -u

### 添加所有文件（新增、修改和删除的）
$ git add -A

### 提交到本地库
$ git commit -m "file readme.md"

### 提交到远程库
$ git remote add -u origin git@github.com:hub2016/git-learn.git

### 从本地origin推送到远程库master分支
$ git push -u origin master

$ git push -u company master

## 删除文件
$ rm test.html

$ git rm test.html

### 获取代码
$ git clone git@github.com:hub2016/git-learn.git

### 下载远程更新
$ git pull origin master

### 查看本地所有分支
$ git branch

### 查看远程所有分支
$ git branch -r

### 查看本地和远程所有分支
$ git branch -a

### 新建分支
$ git branch branchname

### 修改本地分支名称
$ git branch -m branchname newbranchname

### 删除本地分支
$ git branch -d branchname

### 删除远程分支
$ git push --delete origin branchname

### 切换分支
$ git checkout branchname

### 新建并切换分支
$ git checkout -b branchname

## 从本地origin推送到远程库dev分支
$ git pull origin dev

### 合并主干
举个栗子：主干master合并分支dev

$ git merge master

### 查看提交日志

$ git log -l 3

### 回滚到某个提交点

$ git reset --hard 7bb5208cf096fc851882594dabfb4aede3c9f504

### 强制提交（公司项目不建议使用）

$ git push -f -u origin master

### 撤销某次操作

$ git revert 7bb5208cf096fc851882594dabfb4aede3c9f504


