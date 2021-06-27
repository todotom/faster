#!/bin/bash

docker build -t ubuntu-zookeeper --build-arg PASSWD=1234 .

docker run -it --name ubuntu-zookeeper -h ubuntu-zookeeper --mount source=ubuntu-zookeeper,target=/* --network kafka-cluster -p 2181:2181 --rm ubuntu-zookeeper