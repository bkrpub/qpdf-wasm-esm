#!/bin/bash

git submodule init
git submodule update
docker build -t emscripten .
docker run --rm -v $PWD:/src -u 1000:1000 emscripten ./build.sh
