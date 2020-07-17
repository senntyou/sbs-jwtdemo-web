#!/bin/bash

# 备份 html 文件夹
# Usage: sh html_backup.sh

# 存放 html 文件的目录名
DIR='html'
# 存放备份文件的目录名
BAK_DIR='html-bak'

VERSION=`date +'%Y.%m%d.%H%M'`

set -e

main(){
  echo $VERSION > ${DIR}/version.txt

  if [ ! -d $BAK_DIR ]; then
    mkdir $BAK_DIR
  fi

  echo "sh: tar -czvf ${BAK_DIR}/${DIR}-${VERSION}.tar.gz ${DIR}"
  tar -czvf ${BAK_DIR}/${DIR}-${VERSION}.tar.gz ${DIR}
  echo 'Backup succeeded.'
}

main
