#!/bin/bash

docker build -t authentication .

docker run -it --name authentication -h authentication --mount source=authentication,target=/* --network kafka-cluster -p 5000:5000 --rm authentication

# docker run -it --name authentication -h authentication --mount source=authentication,target=/* -p 5000:5000 --rm authentication