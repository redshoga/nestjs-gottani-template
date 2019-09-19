#!/bin/bash
CONTAINER_ID=`cat $(dirname ${0})/CONTAINER_ID`
docker rm --force $CONTAINER_ID
