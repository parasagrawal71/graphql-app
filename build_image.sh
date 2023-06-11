#! /bin/bash

echo 'Removing tagged images'
docker rmi gcr.io/graphql-app:1.0.0

echo 'Removing existing images'
docker rmi graphql-app:1.0.0

echo 'Creating new image for graphql-app'
docker build --tag graphql-app:1.0.0 . --platform linux/amd64