#!/bin/bash
docker container run --rm -d \
  -e MYSQL_ROOT_PASSWORD=mysql \
  -e MYSQL_DATABASE=test \
  -p 43306:3306 \
  --name mysql \
  stretch-mysql:dev
