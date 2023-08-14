#!/usr/bin/env sh
###
 # @Author: 丁攀峰 allen@leanktech.com
 # @Date: 2022-09-06 23:53:30
 # @LastEditors: 丁攀峰 allen@leanktech.com
 # @LastEditTime: 2023-05-28 21:06:10
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
