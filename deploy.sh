#!/usr/bin/env sh
###
 # @Author: dingpanfeng
 # @Date: 2022-09-06 22:33:46
 # @LastEditors: dingpanfeng
 # @LastEditTime: 2022-09-07 00:23:50
 # @FilePath: /dingpanfeng.github.io/deploy.sh
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:dingpanfeng/dingpanfeng.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -