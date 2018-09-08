#!/bin/bash

yarn build-server
docker build -t letitrock/abb:latest .
docker push letitrock/abb:latest
docker run -p 3001:4000 --net="host" -d letitrock/latest