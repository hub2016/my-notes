# git使用说明 及 其他学习汇总

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

UDACity-Recover
git init

git status

git add index.html  / git add .

git commit 进入代码编辑器，输入注释后 1、按ESC 2、再输入 :wq 保存退出 / :q! 不保存退出


创建命名以.开头的文件 touch .gitignore

git diff    //显示已经保存但是尚未 commit 的更改

git log --oneline --graph --all     //--graph 选项将条目和行添加到输出的最左侧。显示了实际的分支。--all 选项会显示仓库中的所有分支。

git reset --hard HEAD^  //撤销合并

git merge sidebar   //合并分支


END 按q键退出


git log  === git log --decorate     //git 2.13版本后自动启用 --decorate 选项


git log --oneline   //单行显示commit记录

git log --stat  //显示文件修改统计

git log -p / git log --patch  //显示具体修改


git tag -a v1.0     //创建标签 -a 表示要添加注释

git tag     //列出标签

git tag -d v1.0     //删除标签


git branch  //列出分支，带*为活跃分支

git branch sidebar  //创建分支


git checkout sidebar    //切换分支

git checkout -b footer master   //创建分支并切换到该分支上

git branch -d sidebar   //删除分支，强制删除用-D


git commit --amend  //更改最近一次commit消息，向commit中添加忘记的文件


git checkout -- index.html  //删除未commit的更改

git reset --mixed HEAD^     //把 commit 9ec05ca 中做出的更改移至工作目录中

git reset --soft HEAD^     //把 commit 9ec05ca 中做出的更改直接移至暂存区

git reset --hard HEAD^     //将清除 commit 9ec05ca 中做出的更改


* e014d91 (HEAD -> master, footer) Add links to social media
* 209752a Improve site heading for SEO
* 3772ab1 Set background color for page

git reset --hard HEAD~3     //==> 3772ab1

^ – 表示父 commit

~ – 表示第一个父 commit
