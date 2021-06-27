#!/bin/bash

docker build -t test .

# docker run -it --name test -h test --rm ubuntu-kafka

docker run -it --name test -h test --network kafka-cluster --rm test