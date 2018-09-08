#!/bin/bash

docker build -t letitrock/abb:1.0.0 .
docker run -p 3001:4000 --net="host" -d letitrock/abb:1.0.0