#! /bin/bash

# prepare for generate docs
cd docs

# re-generate docs
hexo clean && hexo generate

# copy to docs
cp -rf public/ .

# prepare for push 
cd ..

# add commits
git add .

# commit 
git commit -m "auto deploy website"

# push to github and others
git push origin master