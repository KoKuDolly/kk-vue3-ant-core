#! /bin/bash
rm -rf node_modules

echo "----------Start npm install------------"
npm config set registry https://registry.npm.taobao.org
npm info underscore
npm install --unsafe-perm
echo "----------Start npm run build-----------"

npm run build:prod

cd dist

zip -q -r ./test-ui.zip
