#!/bin/bash

rm -rf ./dist

mkdir ./dist

# sub-react子应用
cp -r ./sub-react/build/ ./dist/sub-react/

# sub-vue子应用
cp -r ./sub-vue/dist/ ./dist/sub-vue/

# sub-html子应用
cp -r ./sub-html/dist/ ./dist/sub-html/

# main基座
cp -r ./main/dist/ ./dist/main/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
