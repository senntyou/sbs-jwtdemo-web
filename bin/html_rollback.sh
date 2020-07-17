#!/bin/bash

# 回滚 html 文件夹到之前的版本
# Usage: sh html_rollback.sh [index]
# [index]: 回滚到最近第几个版本，默认是1

# 存放 html 文件的目录名
DIR='html'
# 存放备份文件的目录名
BAK_DIR='html-bak'
# 解压存放的临时目录
TMP_DIR='html-restore-tmp'

set -e

index=0
if [ -z $1 ]; then
  index=1
elif [ "`echo $1|sed 's/[^0-9]//g'`" != $1 ]; then
  echo '[index] need number'
  exit 1
else
  index=$1
fi

main(){
  if [ $index -lt 1 ]; then
    echo "[index] should be greater than 0"
    return 1
  fi
  filesCount=`ls ${BAK_DIR}/${DIR}-*.tar.gz|wc -l|sed 's/ //g'`
  if [ $filesCount -eq 0 ]; then
    echo "No .tar.gz files found under ${BAK_DIR}"
    return 1;
  fi
  if [ $index -gt $filesCount ]; then
    echo "[index] should be 1-${filesCount}"
    return 1
  fi

  if [ ! -d $TMP_DIR ]; then
    mkdir $TMP_DIR
  fi

  file=`ls ${BAK_DIR}/${DIR}-*.tar.gz|tail -${index}|head -1`

  # 清除以前可能存在的文件
  rm -rf $TMP_DIR/$DIR

  echo "sh: tar -xzvf ${file} -C $TMP_DIR"
  tar -xzvf ${file} -C $TMP_DIR

  rm -rf $DIR
  mv $TMP_DIR/$DIR $DIR

  # 清除临时文件夹
  rm -rf $TMP_DIR

  echo "Rollback [${index}] succeeded."
}

main
