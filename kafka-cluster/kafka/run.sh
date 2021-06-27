#!/bin/bash

docker build -t ubuntu-kafka --build-arg PASSWD=1234 .

docker run -it --name ubuntu-kafka -h ubuntu-kafka --mount source=ubuntu-kafka,target=/* --network kafka-cluster -p 9092:9092 --rm ubuntu-kafka