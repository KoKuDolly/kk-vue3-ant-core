#! /bin/sh
echo "-------start delete dist.zip-------"
rm dist.zip
echo "-------end delete dist.zip-------"
echo "-------start zip dist.zip-------"
zip -q -r dist.zip dist
echo "------end zip dist.zip--------"
